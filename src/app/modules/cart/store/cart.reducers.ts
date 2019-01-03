import {CartItem} from '@shared/models/cart-item.model';

export interface CartState {
  cart: State;
}

export interface State {
  cart: CartItem[];
}

const initialState: State = {
  cart: []
};

export function cartReducer(state = initialState, action) {
  return state;
}
