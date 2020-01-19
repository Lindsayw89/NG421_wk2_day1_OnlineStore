import { Component, OnInit } from '@angular/core';
import { Product } from '../interfaces/product';
import {ProductService} from '../services/product.service';


@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
shoppingCart: Product[]
  constructor(private productService : ProductService) { }

  ngOnInit() {
    this.shoppingCart=this.productService.getShoppingCart();
  }

}
