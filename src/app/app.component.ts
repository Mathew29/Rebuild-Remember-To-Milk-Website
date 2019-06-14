import { Component } from '@angular/core';
import { Description } from './models/description.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'remember the milk';
  header = true;
  masterDescriptionHeader: Description[] = [
    new Description('The smart to-do app for busy people.')
  ];
}
