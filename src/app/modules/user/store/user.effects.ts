import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Actions, Effect, ofType} from '@ngrx/effects';
import {Store} from '@ngrx/store';
import {environment} from '../../../../environments/environment';

import * as UserActions from './user.actions';
import * as fromUser from './user.reducers';
import {map, mergeMap, switchMap} from 'rxjs/operators';
import {Order} from '@shared/models/order.model';
import {OrderStatus} from '@shared/models/order-status.model';
import {PaymentType} from '@shared/models/payment-type.model';
import {OrderedProduct} from '@shared/models/ordered-product.model';
import * as CartActions from '@modules/cart/store/cart.actions';
import {Product} from '@shared/models/product.model';
import {CartItem} from '@shared/models/cart-item.model';

@Injectable()
export class UserEffects {

  private url: string;

  constructor(private http: HttpClient, private actions$: Actions, private store: Store<fromUser.UserState>) {
    this.url = environment.server;
  }

  @Effect()
  fetPaymentTypes$ = this.actions$.pipe(
    ofType(UserActions.TRY_FETCH_PAYMENT_TYPE),
    switchMap( () =>
      this.http.get<PaymentType[]>(this.url + 'paymenttype/').pipe(
        map( (paymentTypes: PaymentType[]) => {
          return {type: UserActions.SET_PAYMENT_TYPE, payload: paymentTypes}
        })
      )
    )
  )

  @Effect()
  fetchOrderStatus$ = this.actions$.pipe(
    ofType(UserActions.TRY_FETCH_ORDER_STATUS),
    switchMap( () =>
      this.http.get<OrderStatus[]>(this.url + 'orderstatus/').pipe(
        map( (orderStatuses: OrderStatus[]) => {
          return {type: UserActions.SET_ORDER_STATUS, payload: orderStatuses}
        })
      )
    )
  )

  @Effect()
  fetchOrders$ = this.actions$.pipe(
    ofType(UserActions.TRY_FETCH_ORDERS),
    switchMap( () =>
      this.http.get<Order[]>(this.url + 'order/').pipe(
        map( (orders: Order[]) => {
          return {type: UserActions.SET_ORDERS, payload: orders}
        })
      )
    )
  )

  @Effect({dispatch: false})
  fetchOrderedProducts$ = this.actions$.pipe(
    ofType(UserActions.TRY_FETCH_ORDERED_PRODUCTS),
    map((action: UserActions.TryFetchOrderedProducts) => {
      return action.payload;
    }),
    switchMap((payload: number) =>
      this.http.get<OrderedProduct[]>(this.url + 'order/' + payload).pipe(
        map((orderedProducts: OrderedProduct[]) => {
          this.store.dispatch(new UserActions.ClearOrderedProduct());
          orderedProducts.forEach((orderedProduct) => {
            this.store.dispatch(new UserActions.TrySetOrderedProduct(orderedProduct))
          })
        })
      )
    )
  );

  @Effect()
  setOrderedProduct$ = this.actions$.pipe(
    ofType(UserActions.TRY_SET_ORDERED_PRODUCT),
    map((action: UserActions.SetOrderedProduct) => {
      return action.payload;
    }),
    mergeMap(payload =>
      this.http.get<Product>(this.url + 'product/' + payload.productId).pipe(
        map((product: Product) => {
          payload.product = product;
          return {type: UserActions.SET_ORDERED_PRODUCT, payload: payload};
        })
      )
    )
  );
}
