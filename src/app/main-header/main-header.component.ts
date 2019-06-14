import { Component, Input, Output, EventEmitter } from '@angular/core';
import { MainHeader } from '../models/main-header.model';

@Component({
  selector: 'app-main-header',
  templateUrl: './main-header.component.html',
  styleUrls: ['./main-header.component.css']
})
export class MainHeaderComponent {
  @Input() childMainHeader: MainHeader[];
  @Output() clickSender = new EventEmitter();

  signUp() {
    this.clickSender.emit();
  }
}
