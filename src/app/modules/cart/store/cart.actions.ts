import {Action} from '@ngrx/store';
import {Product} from '@shared/models/product.model';
import {CartItem} from '@shared/models/cart-item.model';
import {CartItemResponse} from '@shared/models/cart-item-response.model';

export const TRY_FETCH_ITEMS = 'TRY_FETCH_ITEMS';
export const TRY_SET_ITEM = 'TRY_SET_ITEM';
export const SET_ITEM = 'SET_ITEM';
export const TRY_ADD_ITEM = 'TRY_ADD_ITEM';
export const ADD_ITEM = 'ADD_ITEM';
export const TRY_REMOVE_ITEM = 'TRY_REMOVE_ITEM';
export const REMOVE_ITEM = 'REMOVE_ITEM';
export const TRY_UPDATE_ITEM = 'TRY_UPDATE_ITEM';
export const UPDATE_ITEM = 'UPDATE_ITEM';

export class TryFetchItems implements Action {
  readonly type = TRY_FETCH_ITEMS;
}

export class TrySetItem implements Action {
  readonly type = TRY_SET_ITEM;

  constructor(public payload: CartItemResponse) {}
}

export class SetItem implements Action {
  readonly type = SET_ITEM;

  constructor(public payload: CartItem) {}
}

export class TryAddItem implements Action {
  readonly type = TRY_ADD_ITEM;

  constructor(public payload: Product) {}
}

export class AddItem implements Action {
  readonly type = ADD_ITEM;

  constructor(public payload: Product) {}
}

export class TryRemoveItem implements Action {
  readonly type  = TRY_REMOVE_ITEM;

  constructor(public payload: CartItem) {}
}

export class RemoveItem implements Action {
  readonly type = REMOVE_ITEM;

  constructor(public payload: CartItem) {}
}

export class TryUpdateItem implements Action {
  readonly type = TRY_UPDATE_ITEM;

  constructor(public payload: CartItem) {}
}

export class UpdateItem implements Action {
  readonly type = UPDATE_ITEM;

  constructor(public payload: CartItem) {}
}

export type CartActions = TryFetchItems | TrySetItem | SetItem | TryAddItem | AddItem | TryRemoveItem | RemoveItem | TryUpdateItem | UpdateItem;
