import { Component, OnInit } from '@angular/core';
import {Store} from '@ngrx/store';

import * as fromCart from '../../store/cart.reducers';
import * as CartActions from '../../store/cart.actions';
import {Observable} from 'rxjs';

@Component({
  selector: 'app-cart-page',
  templateUrl: './cart-page.component.html',
  styleUrls: ['./cart-page.component.scss']
})
export class CartPageComponent implements OnInit {
  cartState: Observable<fromCart.State>;

  constructor(private store: Store<fromCart.CartState>) { }

  ngOnInit() {
    this.cartState = this.store.select('cart');
    this.store.dispatch(new CartActions.TryFetchItems());
  }

}
