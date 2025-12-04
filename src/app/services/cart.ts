import { Injectable, signal } from '@angular/core';
import { Product } from '../models/products.model';

@Injectable({
  providedIn: 'root',
})
export class Cart {
  cart = signal<Product[]>([]);

  handleCart(product: Product, type: 'increment' | 'decrement' | 'set', amount?: number) {
    if (type == 'increment') {
      this.cart.update((prevs) => {
        const index = prevs.findIndex((prev) => prev.id == product.id);

        if (index !== -1) {
          return prevs.map((item, i) => {
            if ((item.total || 0) >= (item.stock || 0)) {
              return i === index ? { ...item, total: item.stock } : item;
            }
            return i === index ? { ...item, total: (item?.total || 0) + 1 } : item;
          });
        }

        return [
          ...prevs,
          {
            ...product,
            total: 1,
          },
        ];
      });
    }
    if (type == 'decrement') {
      this.cart.update((prevs) => {
        const index = prevs.findIndex((prev) => prev.id == product.id);

        if (index !== -1) {
          return prevs.map((item, i) => {
            if (item.total === 1) {
              return i === index ? { ...item, total: 1 } : item;
            }
            return i === index ? { ...item, total: (item?.total || 0) - 1 } : item;
          });
        }

        return [
          ...prevs,
          {
            ...product,
            total: 0,
          },
        ];
      });
    }
    if (type == 'set') {
      this.cart.update((prevs) => {
        const index = prevs.findIndex((prev) => prev.id == product.id);
        if (index !== -1) {
          return prevs.map((item, i) => {
            return i === index ? { ...item, total: amount || 0 } : item;
          });
        }

        return prevs;
      });
    }
  }

  constructor() {}
}
