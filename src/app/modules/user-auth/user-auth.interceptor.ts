import {Injectable} from '@angular/core';
import {HttpEvent, HttpHandler, HttpInterceptor, HttpRequest} from '@angular/common/http';
import {Observable} from 'rxjs';
import {map, mergeMap, switchMap, take} from 'rxjs/operators';
import {Store} from '@ngrx/store';

import * as fromApp from '@core/store/app.reducer';
import * as fromAuth from '@modules/user-auth/store/auth.reducers';

@Injectable()
export class UserAuthInterceptor implements HttpInterceptor {
  constructor(private store: Store<fromApp.AppState>) {}

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    return this.store.select('auth').pipe(
      take(1),
      switchMap(
        (authState: fromAuth.State) => {
          if (authState.authenticated) {
            console.log('Intercepting Auth HTTP');
            const copiedReq = req.clone({headers: req.headers.set('Authorization', 'Bearer ' + authState.token)});
            return next.handle(copiedReq);
          } else {
            return next.handle(req);
          }
        }
      )
    );
  }
}
