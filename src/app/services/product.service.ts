import { Injectable } from '@angular/core';
import { Product } from '../interfaces/product';
import Products from '../products';  //check


@Injectable({
  providedIn: 'root'
})
export class ProductService {
shoppingCart: Product[] 
products: Product[]

  constructor() { }

getProducts(): Product[] {
 return this.products;
}
getShoppingCart(): Product[]
{
  return this.shoppingCart;
}
addtoCart(product: Product){
  this.shoppingCart.push(product);
}
}