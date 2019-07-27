import {Injectable} from '@angular/core';
import {AngularFireDatabase, AngularFireList} from '@angular/fire/database';
import {UserService} from '../../../features/user/services/user.service';
import {fromEvent} from 'rxjs/index';
import {map} from 'rxjs/internal/operators';

export interface Printer {
  $key: string;
  owner: string;
  name: string;
  height: number;
  width: number;
  depth: number;
  materials: Material[];
  nozzles: number[];
}

export interface Material {
  colors: string[];
  name: string;
}

@Injectable({
  providedIn: 'root'
})
export class PrinterService {

  public printers$: AngularFireList<any>;

  // Inject AngularFireDatabase Dependency in Constructor
  constructor(private db: AngularFireDatabase, private userService: UserService) {
    this.printers$ = this.db.list('/printers');
  }

  // Create Printer
  addPrinter(printer: Partial<Printer>) {
    const user = this.userService.user;
    if (!user) {
      throw new Error('not logged in');
    }

    return this.printers$.push({
      ...printer,
      owner: user.uid
    });
  }

  // Fetch Single Printer Object
  getPrinter(id: string) {
    return this.db.object(`/printers/${id}`);
  }

  // Fetch Single Printer Object
  public getMyPrinters() {
    const user = this.userService.user;
    if (!user) {
      throw new Error('not logged in');
    }

    const query = this.printers$.query.orderByChild('owner').equalTo(user.uid);
    return fromEvent(query, 'value').pipe(
      map(p => (p as any).val()),
      map(o => Object.keys(o).map(k => ({...o[k], $key: k}))),
    );
  }

  // Update Printer Object
  updatePrinter(id: string, printer: Partial<Printer>) {
    const ref = this.getPrinter(id);
    ref.update(printer);
  }

  // Delete Printer Object
  deletePrinter(id: string) {
    return this.getPrinter(id).remove();
  }
}
