import { Component, OnInit, Input } from '@angular/core';
import { Product } from '../interfaces/product';

@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.css']
})
export class ProductDetailComponent implements OnInit {
@Input() product: Product={  price: 0,
name: "",
description:"",
reviews: 0,
rating: 0,
id:0,
imgUrl:""
 }
  constructor() { }

  ngOnInit() {
  }

}
