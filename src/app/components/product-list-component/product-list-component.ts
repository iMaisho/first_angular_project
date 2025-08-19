import { Component } from '@angular/core';
import { Product } from '../../interfaces/product';

@Component({
  selector: 'app-product-list-component',
  imports: [],
  templateUrl: './product-list-component.html',
  styleUrl: './product-list-component.css'
})
export class ProductListComponent {

  products: Array<Product> = [{id: 1, name: "Echelle", price:30, inStock: true}, {id: 2, name: "Clous", price:5, inStock: false}

  ]

}
