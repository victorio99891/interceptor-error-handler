import { Component } from '@angular/core';
import { SimpleService } from './simple-service/simple-service.service';
import { Message } from './model/message.model';
import { stringify } from 'querystring';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  constructor(private simpleService: SimpleService) {}

  message: string;

  showMessage() {
    this.simpleService.simpleGet().subscribe(msg => {
      this.message = JSON.stringify(msg);
    });

    throw Error('This is my error');
  }
}
