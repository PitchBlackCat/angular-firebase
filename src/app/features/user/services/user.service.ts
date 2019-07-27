import {EventEmitter, Injectable} from '@angular/core';
import {AngularFirestore} from '@angular/fire/firestore';
import {AngularFireAuth} from '@angular/fire/auth';
import {Router} from '@angular/router';
import {User} from 'firebase';
import * as firebase from 'firebase/app';
import {Observable, ReplaySubject} from 'rxjs/index';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  constructor(private afs: AngularFirestore, private afAuth: AngularFireAuth, private router: Router) {
    this.afAuth.authState.subscribe(user => {
      if (user) {
        this.user = user;
      } else {
        this.user = null;
      }
    });
  }

  private _user: User;

  get user(): firebase.User {
    return this._user;
  }

  set user(value: firebase.User) {
    this._user = value;
    this._user$.next(value);
  }

  private _user$: ReplaySubject<User> = new ReplaySubject<User>(1);

  get user$(): Observable<User> {
    return this._user$.asObservable();
  }

  get isLoggedIn(): boolean {
    return this._user != null;
  }

  async loginWithGoogle() {
    try {
      const provider = new firebase.auth.GoogleAuthProvider();
      provider.addScope('profile');
      provider.addScope('email');
      await this.afAuth.auth.signInWithPopup(provider);
      this.router.navigate(['dashboard']);
    } catch (e) {
      alert('Error! ' + e.message);
    }
  }

  async login(email: string, password: string) {
    try {
      await this.afAuth.auth.signInWithEmailAndPassword(email, password);
      this.router.navigate(['/dashboard']);
    } catch (e) {
      alert('Error! ' + e.message);
    }
  }

  async logout() {
    await this.afAuth.auth.signOut();
    this.router.navigate(['/login']);
  }

  async register(email: string, password: string) {
    try {
      await this.afAuth.auth.createUserWithEmailAndPassword(email, password);
      this.router.navigate(['dashboard']);
    } catch (e) {
      alert('Error! ' + e.message);
    }
  }
}
