
import { createSelector } from "@ngrx/store";
import { CartState } from "../shared/cart/cart.model";

export interface AppState {
  cart: CartState,
  favorites: CartState
}

export const selectCart = (state: AppState) => state.cart;

export const selectCartLength = createSelector(
  selectCart,
  (state: CartState) => state.items.length
);