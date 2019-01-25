import {AppState} from '@core/store/app.reducer';
import * as UserActions from './user.actions';
import {Order} from '@shared/models/order.model';
import {OrderStatus} from '@shared/models/order-status.model';
import {PaymentType} from '@shared/models/payment-type.model';
import {OrderedProduct} from '@shared/models/ordered-product.model';

export interface UserState extends AppState {
  user: State;
}

export interface State {
  orders: Order[];
  orderStatus: OrderStatus[];
  paymentTypes: PaymentType[];
  orderedProducts: OrderedProduct[]
}

const initialState: State = {
  orders: [],
  orderStatus: [],
  paymentTypes: [],
  orderedProducts: []
};

export function userReducers(state = initialState, action) {
  switch(action.type) {
    case(UserActions.SET_ORDERS):
      return {
        ...state,
        orders: [...action.payload]
      };
    case(UserActions.SET_ORDER_STATUS):
      return {
        ...state,
        orderStatus: [...action.payload]
      };
    case(UserActions.SET_PAYMENT_TYPE):
      return {
        ...state,
        paymentTypes: [...action.payload]
      };
    case(UserActions.ClEAR_ORDERED_PRODUCTS):
      return {
        ...state,
        orderedProducts: []
      };
    case(UserActions.SET_ORDERED_PRODUCT):
      return {
        ...state,
        orderedProducts: [...state.orderedProducts, action.payload]
      };
    default:
      return state
  }
}
