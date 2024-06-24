import { Component, OnInit } from '@angular/core';
import { ProductService } from './product.service';
import { Product } from './product';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrl: './product.component.scss'
})
export class ProductComponent implements OnInit {

  constructor(private productService: ProductService) { }
  products: Product[] = []
  ngOnInit(): void {
    this.getProductsList()
  }

  getProductsList() {
    
    this.productService.getProducts().subscribe(data => {
      this.products = data
    })
    
  }


}
