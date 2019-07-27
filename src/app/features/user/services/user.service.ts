import {Injectable} from '@angular/core';
import {AngularFirestore} from '@angular/fire/firestore';
import {AngularFireAuth} from '@angular/fire/auth';
import {Router} from '@angular/router';
import {User} from 'firebase';
import * as firebase from 'firebase/app';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  private user: User;

  constructor(private afs: AngularFirestore, private afAuth: AngularFireAuth, private router: Router) {
    this.afAuth.authState.subscribe(user => {
      if (user) {
        this.user = user;
        localStorage.setItem('user', JSON.stringify(this.user));
      } else {
        localStorage.setItem('user', null);
      }
    });
  }

  get isLoggedIn(): boolean {
    const user = JSON.parse(localStorage.getItem('user'));
    return user !== null;
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
      this.router.navigate(['dashboard']);
    } catch (e) {
      alert('Error! ' + e.message);
    }
  }

  async logout() {
    await this.afAuth.auth.signOut();
    localStorage.removeItem('user');
    this.router.navigate(['admin/login']);
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
