import { Injectable } from '@angular/core';
import { CartState, CartItem } from './cart.model';
import { Store } from '@ngrx/store';
import * as CartActions from './../../store/store.action';

@Injectable({
  providedIn: 'root'
})
export class CartService {
  cart: CartState
  constructor(private store: Store) {
    this.cart = {
      totalPrice: 0,
      items: [
      ]
    }
  }

  add(item: CartItem) {
    console.log(item)
    this.cart.items.push(item)
    console.log(this.cart)
    this.store.dispatch(CartActions.addToCart({ item }));
  }

  remove() {
    console.log('remove')
  }
  clear() {
    console.log('clear')
  }

}

