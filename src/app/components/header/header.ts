import { Component, computed, inject, signal } from '@angular/core';
import { PrimaryButton } from '../primary-button/primary-button';
import { Cart } from '../../services/cart';
import { Router, RouterLink } from '@angular/router';

@Component({
  selector: 'app-header',
  imports: [PrimaryButton, RouterLink],
  templateUrl: './header.html',
  styleUrl: './header.css',
})
export class Header {
  constructor(private router: Router) {}

  isLogin = signal(true);
  cart = inject(Cart);
  navs = [
    {
      label: 'Dashboard',
      path: '/',
    },
    {
      label: 'Products',
      path: '/products',
    },
  ];

  totalInCart = computed(() => {
    let total = 0;

    this.cart.cart().forEach((element) => {
      total = (element.total || 0) + total;
    });
    return total;
  });

  get currentPath() {
    return this.router.url;
  }

  handleClick(type: 'cart') {
    if (type == 'cart') {
      console.log('Cart Clicked');
    }
  }
}
