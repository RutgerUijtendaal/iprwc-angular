import { Component, OnInit } from '@angular/core';
import {Observable} from 'rxjs';
import * as fromCart from '@modules/cart/store/cart.reducers';
import {Store} from '@ngrx/store';

import * as CartActions from '@modules/cart/store/cart.actions';
import * as fromUser from '@modules/user/store/user.reducers';
import * as UserActions from '@modules/user/store/user.actions';

@Component({
  selector: 'app-cart-bottom',
  templateUrl: './cart-bottom.component.html',
  styleUrls: ['./cart-bottom.component.scss']
})
export class CartBottomComponent implements OnInit {

  cartState: Observable<fromCart.State>;
  userState: Observable<fromUser.State>;
  selected: string = "0";

  constructor(private store: Store<fromCart.CartState>) { }

  ngOnInit() {
    this.cartState = this.store.select('cart');
    this.userState = this.store.select('user');
    this.store.dispatch(new UserActions.TryFetchPaymentType());
  }

  placeOrder() {
    this.store.dispatch(new CartActions.TryCreateOrder(+this.selected));
  }

}
