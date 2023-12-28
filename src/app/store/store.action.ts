import { createAction, props } from '@ngrx/store';
import { CartItem } from '../shared/cart/cart.model';

export const addToCart = createAction(
  '[Cart] Add Item',
  props<{ item: CartItem }>()
);

export const removeFromCart = createAction(
  '[Cart] Remove Item',
  props<{ itemId: number, size: string, color: string }>()
);

export const loadCart = createAction(
  '[Cart] LOAD',
  props<{ items: CartItem[] }>()
);

export const decreaseQuantity = createAction(
  '[Cart] decreaseQuantity',
  props<{ item: CartItem }>()
);
