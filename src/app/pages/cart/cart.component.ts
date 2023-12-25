import { Component, OnDestroy } from '@angular/core';
import { Store } from '@ngrx/store';
import { CartState } from 'src/app/shared/cart/cart.model';
import { initialCartState } from 'src/app/store/store.reducers';
import { AppState, selectCart, selectCartLength } from 'src/app/store/store.selectors';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss']
})
export class CartComponent implements OnDestroy {
  cartSubscription = this.store.select(selectCart).subscribe(cart => this.cart = cart)

  cart: CartState = initialCartState;

  constructor(private store: Store<AppState>) {
    this.store.select(selectCart).subscribe(cart => this.cart = cart)
  }

  ngOnDestroy(): void {
    this.cartSubscription.unsubscribe()
  }

}
