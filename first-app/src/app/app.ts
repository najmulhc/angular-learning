import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Home } from './home/home';

@Component({
  selector: 'app-root',
  imports: [Home],
  templateUrl: "./app.html" ,
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('first-app');
  protected readonly messsage : string = "Welcome from the class itself. ";
}
