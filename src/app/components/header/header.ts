import { Component, signal } from '@angular/core';

@Component({
  selector: 'app-header',
  imports: [],
  templateUrl: './header.html',
  styleUrl: './header.css',
})
export class Header {
  title = 'this is header';
  number = signal(0);

  increment() {
    this.number.update((v) => v + 1);
  }
}
