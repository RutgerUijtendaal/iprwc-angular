import {Actions, Effect, ofType} from '@ngrx/effects';
import { Injectable } from '@angular/core';
import { catchError, map, mergeMap } from 'rxjs/operators';
import { of } from 'rxjs';

import * as AuthActions from './auth.actions'

import {HttpClient} from '@angular/common/http';
import {AppComponent} from '../../../app.component';

@Injectable()
export class AuthEffects {

  private url: string;

  constructor(private http: HttpClient, private actions$: Actions) {
    this.url = 'http://136.144.210.76:8080/application';
  }

  @Effect()
  authRegister$ = this.actions$.pipe(
    ofType(AuthActions.TRY_REGISTER),
    map((action: AuthActions.TryRegister) => {
      return action.payload;
      }),
    mergeMap(payload =>
      this.http.post(this.url + '/register', payload).pipe(
        // If successful, dispatch success action with result
        map(data => ({ type: AuthActions.LOGIN, payload: data })),
        // If request fails, dispatch failed action
        // catchError(() => of({ type: 'LOGIN_FAILED' }))
      )
    )


  );

}
