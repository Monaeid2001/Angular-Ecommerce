import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ProductRequestsService {

  constructor(private request:HttpClient) { }
  getProducts(){
    return this.request.get('https://dummyjson.com/products')
  }
  getDetails(id:number){
    return this.request.get(`https://dummyjson.com/products/${id}`)
  }
}
