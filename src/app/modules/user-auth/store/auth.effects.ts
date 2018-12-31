import {Actions, Effect, ofType} from '@ngrx/effects';
import { Injectable } from '@angular/core';
import { map, mergeMap } from 'rxjs/operators';
import { environment } from '../../../../environments/environment';

import * as AuthActions from './auth.actions';

import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Router} from '@angular/router';

@Injectable()
export class AuthEffects {

  private url: string;

  constructor(private http: HttpClient, private actions$: Actions, private router: Router) {
    this.url = environment.server;
}

  @Effect()
  authRegister$ = this.actions$.pipe(
    ofType(AuthActions.TRY_REGISTER),
    map((action: AuthActions.TryRegister) => {
      return action.payload;
    }),
    mergeMap(payload =>
      this.http.post(this.url + 'register', payload).pipe(
        mergeMap((response) => {
          this.router.navigate(['/login']);
          return [{type: AuthActions.REGISTER }];
          }
        ),
      )
    )
  );

  @Effect()
  authSignin = this.actions$.pipe(
    ofType(AuthActions.TRY_LOGIN),
    map((action: AuthActions.TryLogin) => {
      return action.payload;
    }),
    mergeMap(payload =>
      this.http.get(this.url + 'login', {
        headers: new HttpHeaders().append('Authorization', 'Basic ' + window.btoa(payload.email + ':' + payload.password))
      }).pipe(
        mergeMap((response) => {
          this.router.navigate(['/shop']);
          return [
            {
              type: AuthActions.LOGIN,
            },
            {
              type: AuthActions.SET_TOKEN,
              payload: response['token']
            }
          ];
        })
      )
    ),
  );

}
