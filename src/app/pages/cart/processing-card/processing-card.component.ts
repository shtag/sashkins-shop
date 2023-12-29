import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { CartState } from 'src/app/shared/cart/cart.model';
import { initialCartState } from 'src/app/store/store.reducers';
import { AppState, selectCart } from 'src/app/store/store.selectors';

@Component({
  selector: 'app-processing-card',
  templateUrl: './processing-card.component.html',
  styleUrl: './processing-card.component.scss'
})
export class ProcessingCardComponent {

  cartSubscription = this.store.select(selectCart).subscribe(cart => this.cart = cart)

  cart: CartState = initialCartState;

  constructor(private store: Store<AppState>) {
    this.store.select(selectCart).subscribe(cart => this.cart = cart)
  }

}
