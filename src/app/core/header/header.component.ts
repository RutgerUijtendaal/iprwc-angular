import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';

import * as fromApp from '../store/app.reducer';
import * as fromAuth from '../../modules/user-auth/store/auth.reducers';
import * as fromCart from '@modules/cart/store/cart.reducers'
import * as AuthActions from '@modules/user-auth/store/auth.actions';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  authState: Observable<fromAuth.State>;
  cartState: Observable<fromCart.State>;

  constructor(private store: Store<fromApp.AppState>) { }

  ngOnInit() {
    this.authState = this.store.select('auth');
    this.cartState = this.store.select('cart');
  }

  logout() {
    this.store.dispatch(new AuthActions.Logout());
  }

}
