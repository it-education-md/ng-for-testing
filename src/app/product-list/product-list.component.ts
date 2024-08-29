import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-product-list',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './product-list.component.html',
  styleUrl: './product-list.component.css',
})
export class ProductListComponent {
  products = [
    { name: 'Healthcare Product 1', image: './assets/1.jpeg' },
    { name: 'Healthcare Product 2', image: './assets/2.jpeg' },
    { name: 'Healthcare Product 3', image: './assets/3.jpeg' },
  ];
}
