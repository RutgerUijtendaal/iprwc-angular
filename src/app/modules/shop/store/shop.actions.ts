import { Action } from '@ngrx/store';
import { Product } from '@shared/models/product.model';
import { ProductType } from '@shared/models/product-types.model';

export const TRY_FETCH_PRODUCTS = 'TRY_FETCH_PRODUCTS';
export const SET_PRODUCTS = 'SET_PRODUCTS';
export const TRY_FETCH_PRODUCT_TYPES = 'TRY_FETCH_PRODUCT_TYPES';
export const SET_PRODUCT_TYPES = 'SET_PRODUCT_TYPES';
export const FILTER_PRODUCTS = 'FILTER_PRODUCTS';
export const RESET_FILTER = 'RESET_FILTER';

export class TryFetchProducts implements Action {
  readonly type = TRY_FETCH_PRODUCTS;
}

export class SetProducts implements Action {
  readonly type = SET_PRODUCTS;

  constructor(public payload: Product[]) {}
}

export class TryFetchProductTypes implements Action {
  readonly type = TRY_FETCH_PRODUCT_TYPES;
}

export class SetProductTypes implements Action {
  readonly type = SET_PRODUCT_TYPES;

  constructor(public payload: ProductType[]) {}
}

export class FilterProducts implements Action {
  readonly type = FILTER_PRODUCTS;

  constructor(public payload: number) {}
}

export class ResetFilter implements Action {
  readonly type = RESET_FILTER;
}

export type ShopActions = TryFetchProducts | SetProducts | TryFetchProductTypes | SetProductTypes | FilterProducts | ResetFilter;
