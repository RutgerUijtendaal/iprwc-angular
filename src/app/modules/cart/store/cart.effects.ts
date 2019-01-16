import {Injectable} from '@angular/core';
import {HttpClient, HttpParams} from '@angular/common/http';
import {Store} from '@ngrx/store';
import {Actions, Effect, ofType} from '@ngrx/effects';
import {map, mergeMap, switchMap} from 'rxjs/operators';

import {environment} from '../../../../environments/environment';

import * as CartActions from '@modules/cart/store/cart.actions';
import * as fromCart from './cart.reducers';

import {Product} from '@shared/models/product.model';
import {CartItem} from '@shared/models/cart-item.model';
import {CartItemResponse} from '@shared/models/cart-item-response.model';

@Injectable()
export class CartEffects {

  private url: string;

  constructor(private http: HttpClient, private actions$: Actions, private store: Store<fromCart.CartState>) {
    this.url = environment.server;
  }

  // Get the full list of items, dispatch an effect for every item to get the product info
  @Effect({ dispatch: false })
  fetchItems$ = this.actions$.pipe(
    ofType(CartActions.TRY_FETCH_ITEMS),
    switchMap((action: CartActions.TryFetchItems) =>
      this.http.get<CartItemResponse[]>(this.url + 'cart').pipe(
        map((cartItemsResponse) => {
          console.log('TryFetchItems fired');
          console.log(cartItemsResponse);
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
          console.log('TryFetchItem fired');
          console.log(cartItem);
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
      this.http.put(this.url + 'cart', product).pipe(
        map((cartItem) => {
          console.log('TryAddItem fired');
          console.log(cartItem);
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
      this.http.post(this.url + 'cart', message).pipe(
        map((cartItem) => {
          console.log('TryUpdateItem fired');
          console.log(cartItem);
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
          console.log('TryRemoveItem fired');
          console.log(productId);
          return {type: CartActions.REMOVE_ITEM, payload: +productId}
        })
      )
    )
  )
}
