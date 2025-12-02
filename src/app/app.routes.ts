import { Routes } from '@angular/router';
import { ProductsList } from './pages/products-list/products-list';
import { Cart } from './pages/cart/cart';
import { Home } from './pages/home/home';

export const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    component: Home,
  },
  {
    path: 'products',
    pathMatch: 'full',
    component: ProductsList,
  },
  {
    path: 'cart',
    pathMatch: 'full',
    component: Cart,
  },
];
