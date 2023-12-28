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
    const index = state.items.findIndex(i => i.art === item.art && i.color === item.color && i.size === item.size);
    const totalPrice = state.items.reduce((acc, curr) => acc + curr.price * curr.quantity, 0)
    if (index !== -1 && state.items[index].color === item.color && state.items[index].size === item.size) {
      const updatedItem = { ...state.items[index], quantity: state.items[index].quantity + 1 };
      return {
        ...state,
        items: [...state.items.slice(0, index), updatedItem, ...state.items.slice(index + 1)],
        totalPrice: totalPrice + item.price // Adjust total price accordingly
      };
    }
    return {
      ...state,
      items: [...state.items, item],
      totalPrice: totalPrice + item.price
    };
  }),
  on(CartActions.removeFromCart, (state, { itemId, size, color }) => {
    const newCartItems = state.items.filter(item => item.art !== itemId || item.size !== size || item.color !== color)
    const totalPrice = newCartItems.reduce((acc, curr) => acc + curr.price * curr.quantity, 0);
    return {
      ...state,
      items: newCartItems,
      totalPrice: totalPrice
    };
  }),
  on(CartActions.loadCart, (state, { items }) => {
    const totalPrice = items.reduce((acc, curr) => acc + curr.price * curr.quantity, 0);
    return {
      ...state,
      items: items,
      totalPrice: totalPrice
    };
  }),
  on(CartActions.decreaseQuantity, (state, { item }) => {
    const index = state.items.findIndex(i => i.art === item.art && i.color === item.color && i.size === item.size);
    const totalPrice = state.items.reduce((acc, curr) => acc + curr.price * curr.quantity, 0)
    if (index !== -1 && state.items[index].color === item.color && state.items[index].size === item.size) {
      const updatedItem = { ...state.items[index], quantity: state.items[index].quantity - 1 };
      if (updatedItem.quantity < 1) return {
        ...state,
        items: [...state.items.slice(0, index), ...state.items.slice(index + 1)],
        totalPrice: totalPrice - item.price
      }
      return {
        ...state,
        items: [...state.items.slice(0, index), updatedItem, ...state.items.slice(index + 1)],
        totalPrice: totalPrice - item.price
      };
    }
    return {
      ...state
    };
  }),
);


// export const favoritesReducer = createReducer(
//   initialCartState,
//   on(CartActions.addToCart, (state, { item }) => {
//     return {
//       ...state,
//       items: [...state.items, item],
//       totalPrice: state.items.reduce((acc, curr) => acc + curr.price * curr.quantity, 0)
//     };
//   }),
//   on(CartActions.removeFromCart, (state, { itemId }) => {
//     return {
//       ...state,
//       items: state.items.filter(item => item.art !== itemId),
//       totalPrice: state.items.reduce((acc, curr) => acc + curr.price * curr.quantity, 0)
//     };
//   }
//   )
// );

export const APP_STATE: AppState = {
  cart: initialCartState,
  favorites: initialCartState,

}



