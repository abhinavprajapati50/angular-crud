import { Component, OnInit } from '@angular/core';
import { ProductService } from './product.service';
import { Product } from './product';
import { MessageService } from 'primeng/api';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrl: './product.component.scss',
  providers: [MessageService]

})
export class ProductComponent implements OnInit {
  
  products: any[]=[];
  displayDialog: boolean = false;
  newProduct: any = {};
  constructor(private productService: ProductService, private messageService: MessageService) { }
  // products: Product[] = []
  ngOnInit(): void {
    this.loadProducts()
  }

  loadProducts() {
    
    // this.productService.getProducts().subscribe(
    //   products => this.products = products,
    //   error => console.error('Error loading products', error)
    // );

    this.productService.getProducts().subscribe((products) => {
      this.products = products;
    });
    
  }
  showDialogToAdd() {
    this.newProduct = {};
    this.displayDialog = true;
  }

  save() {
    if (this.newProduct.id) {
      this.products[this.newProduct.id] = this.newProduct
      this.productService.updateProduct(this.newProduct.id, this.newProduct).subscribe(
        () => {

          this.messageService.add({ severity: 'success', summary: 'Success', detail: 'Product updated' });
          this.loadProducts();
        },
        error => console.error('Error updating product', error)
      );
    } else {
      // Create new product
      this.productService.createProduct(this.newProduct).subscribe(
        () => {
          this.products.push(this.newProduct);
          this.messageService.add({ severity: 'success', summary: 'Success', detail: 'Product created' });
          this.loadProducts();
        },
        error => console.error('Error creating product', error)
      );
    }
    this.displayDialog = false;
  }

  delete(id: number) {
    if (confirm('Are you sure you want to delete this product?')) {
      console.log("this.productService")
      // this.products = this.products.filter(p => p.id !== id)
      this.productService.deleteProduct(id).subscribe(
        () => {
          this.messageService.add({ severity: 'success', summary: 'Success', detail: 'Product deleted' });
          this.loadProducts();
        },
        error => console.error('Error deleting product', error)
      );
    }
  }

  edit(product: any) {
    this.newProduct = { ...product };
    this.displayDialog = true;
  }

  cancel() {
    this.displayDialog = false;
  }

}
