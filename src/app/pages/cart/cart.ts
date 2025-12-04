import { Component, inject } from '@angular/core';
import { Cart as CartService } from '../../services/cart';
import { Product } from '../../models/products.model';

@Component({
  selector: 'app-cart',
  imports: [],
  templateUrl: './cart.html',
  styleUrl: './cart.css',
})
export class Cart {
  cartService = inject(CartService);

  handleChange(e: Event, product: Product) {
    const input = e.target as HTMLInputElement;
    let value = Number(input.value);

    const stock = product.stock ?? 0;
    const totalInCart = (product as any).total ?? 1; // tergantung definisi Product kamu

    // Kalau NaN (kosong / gak valid) → balikin ke nilai lama
    if (Number.isNaN(value)) {
      value = totalInCart;
    }

    // Clamp: minimal 1
    if (value < 1) {
      value = 1;
    }

    // Clamp: maksimal stock
    if (value > stock) {
      value = stock;
    }

    // Update ke service
    this.cartService.handleCart(product, 'set', value);

    // Sinkronkan DOM input langsung (biar "0" / >stock ke-reset saat itu juga)
    input.value = String(value);
  }

  handleClick(product: Product, type: 'increment' | 'decrement' | 'set', amount?: number) {
    if (type === 'decrement') {
      this.cartService.handleCart(product, 'decrement');
    }

    if (type === 'increment') {
      this.cartService.handleCart(product, 'increment');
    }
  }
}
