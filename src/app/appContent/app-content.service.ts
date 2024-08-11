import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of, throwError } from 'rxjs';
import { Product } from './product.model';
import { delay } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class AppContentService {
  constructor(private http: HttpClient) {}
  private products: Product[] = [
    { id: 1, name: 'Head Phone', price: 500, product_info: 'Headphones are a pair of small loudspeaker drivers worn on or around the head over a user ears. They are electroacoustic transducers, which convert an electrical signal to a corresponding sound. '},
    { id: 2, name: 'Laptop', price: 75000, product_info: 'A laptop computer or notebook computer' },
  ];
  added: any = [];
  setTodos(todo) {
    this.added.push(todo);
  }
  addedTodos() {
    return this.added;
  }

  getMethod() {
    return this.http.get('https://type.fit/api/quotes');
  }
  getContent() {
    return this.http.get('https://jsonplaceholder.typicode.com/posts');
  }
  deleteContent(id) {
    return this.http.get('https://jsonplaceholder.typicode.com/posts/' + id);
  }
   // Create
   createProduct(product: Omit<Product, 'id'>): Observable<Product> {
    const newProduct = { ...product, id: this.getNextId() };
    this.products.push(newProduct);
    return of(newProduct).pipe(delay(500)); // Simulate network delay
  }

  // Read (all)
  getProducts(): Observable<Product[]> {
    return of(this.products).pipe(delay(500));
  }

  // Read (single)
  getProduct(id: number): Observable<Product> {
    const product = this.products.find(p => p.id === id);
    return product ? of(product).pipe(delay(500)) : throwError('Product not found');
  }

  // Update
  updateProduct(id: number, updates: Partial<Product>): Observable<Product> {
    const index = this.products.findIndex(p => p.id === id);
    if (index !== -1) {
      this.products[index] = { ...this.products[index], ...updates };
      return of(this.products[index]).pipe(delay(500));
    }
    return throwError('Product not found');
  }

  // Delete
  deleteProduct(id: number): Observable<void> {
    const index = this.products.findIndex(p => p.id === id);
    if (index !== -1) {
      this.products.splice(index, 1);
      return of(void 0).pipe(delay(500));
    }
    return throwError('Product not found');
  }

  private getNextId(): number {
    return Math.max(...this.products.map(p => p.id)) + 1;
  }
}
