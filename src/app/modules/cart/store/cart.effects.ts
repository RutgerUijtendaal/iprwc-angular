import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Store} from '@ngrx/store';
import {Actions, Effect, ofType} from '@ngrx/effects';
import {map, mergeMap, switchMap} from 'rxjs/operators';

import {environment} from '../../../../environments/environment';

import * as CartActions from '@modules/cart/store/cart.actions';
import * as fromCart from './cart.reducers';

import {Product} from '@shared/models/product.model';
import {CartItem} from '@shared/models/cart-item.model';
import {CartItemResponse} from '@shared/models/cart-item-response.model';
import {Order} from '@shared/models/order.model';
import {Router} from '@angular/router';

@Injectable()
export class CartEffects {

  private url: string;

  constructor(private http: HttpClient,
              private actions$: Actions,
              private router: Router,
              private store: Store<fromCart.CartState>) {
    this.url = environment.server;
  }

  // Get the full list of items, dispatch an effect for every item to get the product info
  @Effect({ dispatch: false })
  fetchItems$ = this.actions$.pipe(
    ofType(CartActions.TRY_FETCH_ITEMS),
    switchMap((action: CartActions.TryFetchItems) =>
      this.http.get<CartItemResponse[]>(this.url + 'cart').pipe(
        map((cartItemsResponse) => {
          this.store.dispatch(new CartActions.ClearItems());
          cartItemsResponse.forEach((cartItemResponse) => {
            this.store.dispatch(new CartActions.TrySetItem(cartItemResponse));
          });
        })
      )
    )
  );

  // Get the product info of an item and create a cartItem
  @Effect()
  setItem$ = this.actions$.pipe(
    ofType(CartActions.TRY_SET_ITEM),
    map((action: CartActions.TrySetItem) => {
      return action.payload;
    }),
    mergeMap(payload =>
      this.http.get<Product>(this.url + 'product/' + payload.productId).pipe(
        map((product: Product) => {
          const cartItem: CartItem = new CartItem(
            product,
            payload.itemCount
          );
          return {type: CartActions.SET_ITEM, payload: cartItem};
        })
      )
    )
  );

  @Effect()
  addItem$ = this.actions$.pipe(
    ofType(CartActions.TRY_ADD_ITEM),
    map((action: CartActions.TryAddItem) => {
      return action.payload;
    }),
    switchMap((product: Product) =>
      this.http.put(this.url + 'cart/', product).pipe(
        map((cartItem) => {
          return {type: CartActions.TRY_FETCH_ITEMS, payload: cartItem};
        })
      )
    )
  );

  @Effect()
  updateItem$ = this.actions$.pipe(
    ofType(CartActions.TRY_UPDATE_ITEM),
    map((action: CartActions.TryUpdateItem) => {
      return action.payload;
    }),
    map((cartItem: CartItem) => {
      const message: CartItemResponse = new CartItemResponse(
        cartItem.product.productId,
        cartItem.itemCount
      );
      return message;
    }),
    switchMap((message: CartItemResponse) =>
      this.http.post(this.url + 'cart/', message).pipe(
        map((cartItem) => {
          return {type: CartActions.UPDATE_ITEM, payload: cartItem}
        })
      )
    )
  );

  @Effect()
  removeItem$ = this.actions$.pipe(
    ofType(CartActions.TRY_REMOVE_ITEM),
    map((action: CartActions.TryRemoveItem) => {
      return action.payload.product.productId.toString()
    }),
    switchMap((productId: string) =>
      this.http.delete(this.url + 'cart/' +  productId).pipe(
        map(() => {
          return {type: CartActions.REMOVE_ITEM, payload: +productId}
        })
      )
    )
  );

  @Effect({ dispatch: false})
  createOrder$ = this.actions$.pipe(
    ofType(CartActions.TRY_CREATE_ORDER),
    map((action: CartActions.TryCreateOrder) => {
      return action.payload;
    }),
    switchMap( (paymentTypeId: number) =>
      this.http.put<Order>(this.url + 'order/', {paymentTypeId: paymentTypeId}).pipe(
        map( (order: Order) => {
          this.store.dispatch(new CartActions.SetOrder(order));
          this.store.dispatch(new CartActions.TryFetchItems())
          this.router.navigate(['cart/success']);
        })
      )
    )
  );
}
