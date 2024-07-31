import { NgStyle } from '@angular/common';
import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Router, RouterLink } from '@angular/router';
import { AddCartService } from '../services/add-cart.service';
import { Product } from '../interface/product';


@Component({
  selector: 'app-productcard',
  standalone: true,
  imports: [NgStyle,RouterLink],
  templateUrl: './productcard.component.html',
  styleUrl: './productcard.component.css'
})
export class ProductcardComponent {
@Input() productItem:any;

constructor(private router : Router,private addprodct:AddCartService){}

redirectToDetails(id : number){
  this.router.navigate(['productdetails' , id])
}
addProduct(pro:any){
  this.addprodct.addProduct(pro);
}
}
