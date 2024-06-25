import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Product } from './product';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  private apiUrl = 'http://localhost:3001/products';


  constructor(private http: HttpClient) { }

  getProducts(): Observable<Product[][]> {
    return this.http.get<Product[][]>(this.apiUrl);
  }
  createProduct(product: Product[]): Observable<Product[]> {
    return this.http.post<Product[]>(this.apiUrl, product);
  }

  updateProduct(id: number, product: Product[]): Observable<Product[]> {
    return this.http.put<Product[]>(`${this.apiUrl}/${id}`, product);
  }

  // deleteProduct(id: number): Observable<Product[]> {
    
  //   return this.http.delete<Product[]>(`${this.apiUrl}/${id}`);
  // }

  deleteProduct(id: number): Observable<void> {
    return this.http.delete<void>(`${this.apiUrl}/${id}`);
  }
  


}
