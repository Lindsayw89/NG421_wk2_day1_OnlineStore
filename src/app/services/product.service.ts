import { Injectable } from '@angular/core';
import { Product } from '../interfaces/product';
import products from '../products'  //check


@Injectable({
  providedIn: 'root'
})
export class ProductService {
shoppingCart: Product[] 
products: Product[]


  constructor() { 
    this.products = products;  // look over this
  }


getProducts(): Product[] {
 return this.products;
}
getShoppingCart(): Product[]
{
  return this.products;
}
addtoCart(product: Product):Product[] {
  this.shoppingCart.push(product);
  return this.shoppingCart;
}
}