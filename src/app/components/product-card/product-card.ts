import { Component, inject, input } from '@angular/core';
import { Product } from '../../models/products.model';
import { Cart } from '../../services/cart';

@Component({
  selector: 'app-product-card',
  imports: [],
  templateUrl: './product-card.html',
  styleUrl: './product-card.css',
})
export class ProductCard {
  cartService = inject(Cart);
  product = input.required<Product>();
}
