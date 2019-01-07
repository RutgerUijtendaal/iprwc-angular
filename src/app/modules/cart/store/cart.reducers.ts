import {CartItem} from '@shared/models/cart-item.model';
import {AppState} from '@core/store/app.reducer';

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
  return state;
}
