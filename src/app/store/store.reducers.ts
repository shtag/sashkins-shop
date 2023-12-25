import { createReducer, on } from '@ngrx/store';
import * as CartActions from './store.action';
import { CartState } from '../shared/cart/cart.model';
import { AppState } from './store.selectors';



export const initialCartState: CartState = {
  totalPrice: 0,
  items: []
};



export const cartReducer = createReducer(
  initialCartState,
  on(CartActions.addToCart, (state, { item }) => {
    return {
      ...state,
      items: [...state.items, item],
      totalPrice: state.totalPrice + item.price
    };
  }),
  on(CartActions.removeFromCart, (state, { itemId }) => {
    return {
      ...state,
      items: state.items.filter(item => item.art !== itemId),
      totalPrice: state.items.reduce((acc, curr) => acc + curr.price, 0) // Recalculate totalPrice
    };
  }
  )
);


export const favoritesReducer = createReducer(
  initialCartState,
  on(CartActions.addToCart, (state, { item }) => {
    return {
      ...state,
      items: [...state.items, item],
      totalPrice: state.items.reduce((acc, curr) => acc + curr.price, 0)
    };
  }),
  on(CartActions.removeFromCart, (state, { itemId }) => {
    return {
      ...state,
      items: state.items.filter(item => item.art !== itemId),
      totalPrice: state.items.reduce((acc, curr) => acc + curr.price, 0) // Recalculate totalPrice
    };
  }
  )
);

export const APP_STATE: AppState = {
  cart: initialCartState,
  favorites: initialCartState,

}

function getStorage() {
  const storage = localStorage.getItem('ngStorage')
  if (storage) {
    return JSON.parse(storage) as CartState
  }
  return initialCartState
}