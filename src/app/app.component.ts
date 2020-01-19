import { Component } from '@angular/core';
import { Product } from './interfaces/product';
import {ProductService} from './services/product.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
   products : Product[]

   constructor(private productService : ProductService) { }

   ngOnInit() {
    this.products=this.productService.getProducts()
   }
}
