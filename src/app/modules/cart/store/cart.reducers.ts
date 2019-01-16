import {CartItem} from '@shared/models/cart-item.model';
import {AppState} from '@core/store/app.reducer';

import * as CartActions from './cart.actions';

export interface CartState extends AppState {
  cart: State;
}

export interface State {
  cart: CartItem[];
}

const initialState: State = {
  cart: []
};

export function cartReducer(state = initialState, action) {
  switch(action.type) {
    case (CartActions.CLEAR_ITEMS):
      return {
        cart: []
      };
    case (CartActions.SET_ITEM):
      console.log('SetItem fired');
      return {
        cart: [...state.cart, action.payload]
      };
    case (CartActions.ADD_ITEM):
      console.log('AddItem fired');
      return {
        cart: [...state.cart, action.payload]
      };
    case (CartActions.REMOVE_ITEM):
      console.log('RemoveItem fired');
      let index = state.cart.map(item => item.product.productId).indexOf(action.payload);
      const oldCart = [...state.cart];
      if(index !== -1) {
        oldCart.splice(index, 1);
      }
      return {
        cart: [...oldCart]
      };
    case (CartActions.UPDATE_ITEM):
      console.log('UpdateItem fired');
      return {
        cart: [...state.cart]
      };

    default:
      return state;
  }
}
