
import { createSelector } from "@ngrx/store";
import { CartState } from "../shared/cart/cart.model";

export interface AppState {
  cart: CartState,
  favorites: CartState
}

export const selectCarts = (state: AppState) => state.cart;

export const selectCartLength = createSelector(
  selectCarts,
  (state: CartState) => state.items.length
);

export const selectCart = createSelector(
  selectCarts,
  (state: CartState) => state
);