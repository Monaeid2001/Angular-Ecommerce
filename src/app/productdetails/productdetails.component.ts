import { Component, Input } from '@angular/core';
import data from '../../assets/jsonfiles/products-list.json';
import { Product } from '../interface/product'
import { ProductRequestsService } from '../services/product-requests.service';
@Component({
  selector: 'app-productdetails',
  standalone: true,
  imports: [],
  templateUrl: './productdetails.component.html',
  styleUrl: './productdetails.component.css'
})
export class ProductdetailsComponent {
  productsDetails: any;
  @Input() id: number = 0;
  constructor(private requestdetails: ProductRequestsService) { }
  ngOnInit() {
    this.productsDetails = this.requestdetails.getDetails(this.id).subscribe(
      (res: any) => this.productsDetails = res)
      console.log(this.productsDetails)
  }
}
