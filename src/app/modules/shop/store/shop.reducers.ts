import {Product} from '@shared/models/product.model';

import * as ShopActions from './shop.actions';
import {AppState} from '@core/store/app.reducer';
import {ProductType} from '@shared/models/product-types.model';

export interface ShopState extends AppState {
  shop: State;
}

export interface State {
  products: Product[];
  productTypes: ProductType[];
  filteredProducts: Product[];
}

const initialState: State = {
  products: [],
  productTypes: [],
  filteredProducts: []
};

export function shopReducer(state = initialState, action: ShopActions.ShopActions) {
  switch(action.type) {
    case (ShopActions.SET_PRODUCTS):
      return {
        products: [...action.payload],
        productTypes: [...state.productTypes],
        filteredProducts: [...action.payload]

      };
    case(ShopActions.SET_PRODUCT_TYPES):
      return {
        products: [...state.products],
        productTypes: [...action.payload],
        filteredProducts: [...state.filteredProducts]
      };
    case(ShopActions.FILTER_PRODUCTS):
      const newFilteredProducts = state.products.filter(item => item.productTypeId === action.payload);
      return {
        ...state,
        filteredProducts: [...newFilteredProducts]
      };
    case(ShopActions.RESET_FILTER):
      return {
        ...state,
        filteredProducts: [...state.products]
      }
    default:
      return state;
  }
}

