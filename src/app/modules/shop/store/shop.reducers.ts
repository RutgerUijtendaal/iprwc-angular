import {Product} from '@shared/models/product.model';

import * as ShopActions from './shop.actions';

export interface ShopState {
  products: State;
}

export interface State {
  products: Product[];
}

const initialState: State = {
  products: []
};

export function shopReducer(state = initialState, action: ShopActions.ShopActions) {
  switch(action.type) {
    case (ShopActions.SET_PRODUCTS):
      console.log('Set Products fired');
      console.log(action.payload);
      return {
        products: [...action.payload]
      };
    default:
      return state;
  }
}

