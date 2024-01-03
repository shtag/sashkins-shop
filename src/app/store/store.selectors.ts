
import { createSelector } from "@ngrx/store";
import { CartState } from "../shared/cart/cart.model";

export interface AppState {
  cart: CartState,
  favorites: CartState
}

export const selectCarts = (state: AppState) => state.cart;

export const selectCartLength = createSelector(
  selectCarts,
  (state: CartState) => {
    const items = state.items.map(item => item.quantity);
    if (items.length) {
      const n = items.reduce((acc, now) => acc + now)
      return n
    }
    return 0
  }

);

export const selectCart = createSelector(
  selectCarts,
  (state: CartState) => state
);