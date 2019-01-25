import {CartItem} from '@shared/models/cart-item.model';
import {AppState} from '@core/store/app.reducer';

import * as CartActions from './cart.actions';
import {Order} from '@shared/models/order.model';

export interface CartState extends AppState {
  cart: State;
}

export interface State {
  cart: CartItem[];
  order: Order;
}

const initialState: State = {
  cart: [],
  order: null
};

export function cartReducer(state = initialState, action) {
  switch(action.type) {
    case (CartActions.CLEAR_ITEMS):
      return {
        cart: []
      };
    case (CartActions.SET_ITEM):
      return {
        ...state,
        cart: [...state.cart, action.payload]
      };
    case (CartActions.ADD_ITEM):
      return {
        ...state,
        cart: [...state.cart, action.payload]
      };
    case (CartActions.REMOVE_ITEM):
      let index = state.cart.map(
        item => item.product.productId
      ).indexOf(action.payload);

      const oldCart = [...state.cart];

      if(index !== -1) {
        oldCart.splice(index, 1);
      }
      return {
        ...state,
        cart: [...oldCart]
      };
    case (CartActions.UPDATE_ITEM):
      return {
        ...state,
        cart: [...state.cart]
      };
    case (CartActions.SET_ORDER):
      return {
        ...state,
        order: action.payload
      };
    default:
      return state;
  }
}
