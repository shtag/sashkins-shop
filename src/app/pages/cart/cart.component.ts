
import { Component, OnDestroy } from '@angular/core';
import { Store } from '@ngrx/store';
import { CartItem, CartState } from 'src/app/shared/cart/cart.model';
import { initialCartState } from 'src/app/store/store.reducers';
import { AppState, selectCart, } from 'src/app/store/store.selectors';
import * as CartActions from 'src/app/store/store.action';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss']
})
export class CartComponent implements OnDestroy {
  cartSubscription = this.store.select(selectCart).subscribe(cart => this.cart = cart)

  cart: CartState = initialCartState;

  savedCart = initialCartState

  constructor(private store: Store<AppState>) {
    this.store.select(selectCart).subscribe(cart => this.cart = cart)
  }

  ngOnDestroy(): void {
    this.cartSubscription.unsubscribe()
  }

  removeItem(id: number, size: string, color: string) {
    this.store.dispatch(CartActions.removeFromCart({ itemId: id, size, color }))
    console.log('delete')
  }

  increase(item: CartItem) {
    this.store.dispatch(CartActions.addToCart({ item }))
  }

  decrease(item: CartItem) {
    this.store.dispatch(CartActions.decreaseQuantity({ item }))
  }

  saveCard() {
    console.log('save')
    this.savedCart = this.cart
  }

  loadCard() {
    console.log('load')
    this.store.dispatch(CartActions.loadCart({ items: this.savedCart.items }))
  }

}
