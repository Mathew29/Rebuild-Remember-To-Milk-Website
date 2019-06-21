import { Injectable } from '@angular/core';
import { AngularFireDatabase, FirebaseListObservable } from 'angularfire2/database';

@Injectable()
export class TourService {
  employees: FirebaseListObservable<any[]>;
  constructor(private database: AngularFireDatabase) {
    this.employees = database.list('employees');
  }
  getEmployees() {
    return this.employees;
  }
}
