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
    const index = state.items.findIndex(i => i.art === item.art);

    if (index !== -1 && state.items[index].color === item.color && state.items[index].size === item.size) {
      // If found, increment quantity
      const updatedItem = { ...state.items[index], quantity: state.items[index].quantity + 1 };
      return {
        ...state,
        items: [...state.items.slice(0, index), updatedItem, ...state.items.slice(index + 1)],
        totalPrice: state.totalPrice + item.price // Adjust total price accordingly
      };
    }
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
      totalPrice: state.items.reduce((acc, curr) => acc + curr.price, 0)
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
      totalPrice: state.items.reduce((acc, curr) => acc + curr.price, 0)
    };
  }
  )
);

export const APP_STATE: AppState = {
  cart: initialCartState,
  favorites: initialCartState,

}



