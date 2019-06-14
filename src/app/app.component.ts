import { Component } from '@angular/core';
import { MainHeader } from './models/main-header.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'remember the milk';
  header = true;
  masterMainHeader: MainHeader[] = [
    new MainHeader('The smart to-do app for busy people.')
  ];
}
