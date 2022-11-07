import { HttpClient } from '@angular/common/http';
import { EventEmitter, Injectable } from '@angular/core';
import { Product } from '../product';
@Injectable()
export class ProductService {
  apiUrl: string = 'http://localhost:5000/api/shop';
  constructor(private http: HttpClient) {}

  getAllProducts() {
    return this.http.get(this.apiUrl);
  }
  getSingleProduct(id: string) {
    return this.http.get(`${this.apiUrl}/${id}`);
  }
  addProduct(prod: Product) {
    return this.http.post(this.apiUrl, prod);
  }
  updateProduct(id: number, prod: Product) {
    return this.http.patch(`${this.apiUrl}/${id}`, prod);
  }
  deleteProduct(id: number) {
    return this.http.delete(`${this.apiUrl}/${id}`);
  }
}
