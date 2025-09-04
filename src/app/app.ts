import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('museu-app');

  constructor() {}

  // Method to provide a greeting message
  getGreeting(): string {
    return `Welcome to the ${this.title}! This application is designed with accessibility in mind.`;
  }
}
