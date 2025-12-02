import { Component, signal } from '@angular/core';
import { Product } from '../../models/products.model';
import { ProductCard } from '../../components/product-card/product-card';

@Component({
  selector: 'app-products-list',
  imports: [ProductCard],
  templateUrl: './products-list.html',
  styleUrl: './products-list.css',
})
export class ProductsList {
  productList = signal<Product[]>([
    {
      id: 'p2',
      title: 'Laptop Ultrabook 13-inch',
      image: 'https://images.unsplash.com/photo-1517336714731-489689fd1ca8?w=800',
      price: 1099,
      stock: 0,
    },
    {
      id: 'p3',
      title: 'Sport Shoes',
      image: 'https://images.unsplash.com/photo-1526170375885-4d8ecf77b99f?w=800',
      price: 110,
      stock: 40,
    },
    {
      id: 'p4',
      title: 'Smartphone Premium',
      image: 'https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?w=800',
      price: 1299,
      stock: 18,
    },
    {
      id: 'p5',
      title: 'Wireless Mouse',
      image: 'https://images.unsplash.com/photo-1587825140708-dfaf72ae4b04?w=800',
      price: 99,
      stock: 50,
    },
  ]);
}
