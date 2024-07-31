import { Component } from '@angular/core';
import { AddCartService } from '../services/add-cart.service';
import { Product } from '../interface/product';

@Component({
  selector: 'app-cartpage',
  standalone: true,
  imports: [],
  templateUrl: './cartpage.component.html',
  styleUrl: './cartpage.component.css'
})
export class CartpageComponent {
  product!:Product;
  temp: Array<any> = [];
  constructor(private add:AddCartService){}
ngOnInit(){
  this.add.getProduct().subscribe((prodct:any) => {
    this.temp = prodct;
  });
  console.log(this.temp)
}
}
