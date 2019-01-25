import { Injectable } from '@angular/core';
import {Router} from '@angular/router';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {map, mergeMap, switchMap} from 'rxjs/operators';
import {Actions, Effect, ofType} from '@ngrx/effects';
import {Store} from '@ngrx/store';

import * as fromApp from '@core/store/app.reducer';
import * as AuthActions from './auth.actions';
import * as CartActions from '@modules/cart/store/cart.actions';

import { environment } from '../../../../environments/environment';
import {User} from '@shared/models/user.model';

@Injectable()
export class AuthEffects {

  private url: string;

  constructor(private http: HttpClient,
              private actions$: Actions,
              private router: Router,
              private store: Store<fromApp.AppState>) {
    this.url = environment.server;
  }

  @Effect()
  authRegister$ = this.actions$.pipe(
    ofType(AuthActions.TRY_REGISTER),
    map((action: AuthActions.TryRegister) => {
      return action.payload;
    }),
    mergeMap(payload =>
      this.http.post(this.url + 'register/', {
        email: payload.email,
        password: payload.password
      }).pipe(
        mergeMap((user: User) =>
          this.http.post(this.url + 'contact/', {
            userId: user.userId,
            firstName: payload.firstname,
            lastName: payload.lastname,
            country: 'Netherlands',
            streetName: payload.streetname,
            houseNumber: payload.housenumber,
            zipLetters: payload.zipletters,
            zipNumbers: payload.zipnumbers
          },
          {
            headers: new HttpHeaders().append(
              'Authorization',
              'Basic ' + window.btoa(payload.email + ':' + payload.password)
            )
          }).pipe(
            map((response) => {
              console.log(response);
              this.router.navigate(['login']);
              return [{type: AuthActions.REGISTER}];
            })
          )
        )
      )
    )
  );

  @Effect({ dispatch: false })
  authLogin$ = this.actions$.pipe(
    ofType(AuthActions.TRY_LOGIN),
    map((action: AuthActions.TryLogin) => {
      return action.payload;
    }),
    switchMap(payload =>
      this.http.get(this.url + 'login', {
        headers: new HttpHeaders().append('Authorization', 'Basic ' + window.btoa(payload.email + ':' + payload.password))
      }).pipe(
        map((response) => {
          this.router.navigate(['shop']);
          this.store.dispatch(new AuthActions.Login());
          this.store.dispatch(new AuthActions.SetToken(response['token']));
          this.store.dispatch(new CartActions.TryFetchItems());
        })
      )
    ),
  );

}
