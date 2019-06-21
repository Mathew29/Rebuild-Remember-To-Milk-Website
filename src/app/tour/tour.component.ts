import { Component, OnInit } from '@angular/core';
import { FirebaseListObservable } from 'angularfire2/database';
import { TourService } from '../tour.service';

@Component({
  selector: 'app-tour',
  templateUrl: './tour.component.html',
  styleUrls: ['./tour.component.css'],
  providers: [TourService]
})
export class TourComponent implements OnInit {
  employees: FirebaseListObservable<any[]>;
  constructor(private service: TourService) { 
    this.employees = service.getEmployees();

    this.employees.subscribe( items => { 
      console.log(items);
      
    });
  }

  ngOnInit() {
  }

}
