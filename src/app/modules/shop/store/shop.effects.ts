import {HttpClient} from '@angular/common/http';
import {Actions, Effect, ofType} from '@ngrx/effects';
import {Injectable} from '@angular/core';

import * as ShopActions from './shop.actions';
import {map, switchMap} from 'rxjs/operators';
import {environment} from '../../../../environments/environment';
import {Product} from '@shared/models/product.model';
import {ProductType} from '@shared/models/product-types.model';

@Injectable()
export class ShopEffects {

  private url: string;

  constructor(private http: HttpClient, private actions$: Actions) {
    this.url = environment.server;
  }

  @Effect()
  shopFetch$ = this.actions$.pipe(
    ofType(ShopActions.TRY_FETCH_PRODUCTS),
    switchMap((action: ShopActions.TryFetchProducts) =>
      this.http.get<Product[]>(this.url + 'product').pipe(
        map((products) => {
          console.log('TryFetchProducts fired');
          console.log(products);
          return {type: ShopActions.SET_PRODUCTS, payload: products};
        })
      )
    )
  );

  @Effect()
  productTypeFetch$ = this.actions$.pipe(
    ofType(ShopActions.TRY_FETCH_PRODUCT_TYPES),
    switchMap((action: ShopActions.TryFetchProductTypes) =>
      this.http.get<ProductType[]>(this.url + 'producttype').pipe(
        map((productTypes) => {
          console.log('TryFetchProductTypes fired');
          console.log(productTypes);
          return {type: ShopActions.SET_PRODUCT_TYPES, payload: productTypes}
        })
      )
    )
  )
}
