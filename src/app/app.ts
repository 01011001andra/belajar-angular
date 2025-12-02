import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Header } from './components/header/header';
import { ProductsList } from './pages/products-list/products-list';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, Header],
  template: `
    <div class="w-full min-h-screen bg-slate-950">
      <app-header></app-header>
      <router-outlet />
    </div>
  `,
})
export class App {
  protected readonly title = signal('belajar-angular');
}
