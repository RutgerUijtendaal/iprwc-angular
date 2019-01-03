import {Action} from '@ngrx/store';
import {Product} from '@shared/models/product.model';

export const ADD_ITEM = 'ADD_ITEM';
export const REMOVE_ITEM = 'REMOVE_ITEM';

export class AddItem implements Action {
  readonly type = ADD_ITEM;

  constructor(payload: Product) {}
}

export class RemoveItem implements Action {
  readonly type = REMOVE_ITEM;

  constructor(payload: number) {}
}

export type CartActions = AddItem | RemoveItem;
