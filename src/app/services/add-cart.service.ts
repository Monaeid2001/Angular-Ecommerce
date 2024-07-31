import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Product } from '../interface/product';
import { BehaviorSubject } from 'rxjs';
import { ProductRequestsService } from './product-requests.service';

@Injectable({
  providedIn: 'root'
})
export class AddCartService {
  private products = new BehaviorSubject<Product[]>([]);
  productDetails: any;
  constructor(private request:ProductRequestsService) { }
  addProduct(product: Product) {
    const currentProducts = this.products.value;
    const updatedProducts = [...currentProducts, product];
    this.products.next(updatedProducts);
  }
  getProduct(){
    return this.products.asObservable();
  }
}
  ``