import {Action} from '@ngrx/store';
import {Order} from '@shared/models/order.model';
import {OrderStatus} from '@shared/models/order-status.model';
import {PaymentType} from '@shared/models/payment-type.model';
import {OrderedProduct} from '@shared/models/ordered-product.model';

export const TRY_FETCH_ORDERS = 'TRY_FETCH_ORDERS';
export const SET_ORDERS = 'SET_ORDERS';
export const TRY_FETCH_ORDER_STATUS = 'TRY_FETCH_ORDER_STATUS';
export const SET_ORDER_STATUS = 'SET_ORDER_STATUS';
export const TRY_FETCH_PAYMENT_TYPE = 'TRY_FETCH_PAYMENT_TYPE';
export const SET_PAYMENT_TYPE = 'SET_PAYMENT_TYPE';
export const ClEAR_ORDERED_PRODUCTS = 'CLEAR_ORDERED_PRODUCTS';
export const TRY_FETCH_ORDERED_PRODUCTS = 'TRY_FETCH_ORDERED_PRODUCTS';
export const TRY_SET_ORDERED_PRODUCT = 'TRY_SET_ORDERED_PRODUCT';
export const SET_ORDERED_PRODUCT = 'SET_ORDERED_PRODUCT';


export class TryFetchOrders implements Action {
  readonly type = TRY_FETCH_ORDERS;
}

export class SetOrders implements Action {
  readonly type = SET_ORDERS;

  constructor(public payload: Order[]) {}
}

export class TryFetchOrderStatus implements Action {
  readonly type = TRY_FETCH_ORDER_STATUS;
}

export class SetOrderStatus implements Action {
  readonly type = SET_ORDER_STATUS;

  constructor(public payload: OrderStatus[]) {}
}

export class TryFetchPaymentType implements Action {
  readonly type = TRY_FETCH_PAYMENT_TYPE;
}

export class SetPaymentType implements Action {
  readonly type = SET_PAYMENT_TYPE;

  constructor(public payload: PaymentType[]) {}
}

export class ClearOrderedProduct implements Action {
  readonly type = ClEAR_ORDERED_PRODUCTS;
}


export class TryFetchOrderedProducts implements Action {
  readonly type = TRY_FETCH_ORDERED_PRODUCTS;

  constructor(public payload: number) {}
}

export class TrySetOrderedProduct implements Action {
  readonly type = TRY_SET_ORDERED_PRODUCT;

  constructor(public payload: OrderedProduct) {}
}

export class SetOrderedProduct implements Action {
  readonly type = SET_ORDERED_PRODUCT;

  constructor(public payload: OrderedProduct) {}
}


export type UserActions = ClearOrderedProduct | TryFetchOrderedProducts | SetOrderedProduct | TryFetchOrders | SetOrders | TryFetchOrderStatus | SetOrderStatus | TryFetchPaymentType | SetPaymentType;
