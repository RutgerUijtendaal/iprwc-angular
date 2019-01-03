import { Action } from '@ngrx/store';
import {Product} from '@shared/models/product.model';

export const TRY_FETCH_PRODUCTS = 'TRY_FETCH_PRODUCTS';
export const SET_PRODUCTS = 'SET_PRODUCTS';

export class TryFetchProducts implements Action {
  readonly type = TRY_FETCH_PRODUCTS;
}

export class SetProducts implements Action {
  readonly type = SET_PRODUCTS;

  constructor(public payload: Product[]) {}
}

export type ShopActions = TryFetchProducts | SetProducts;
