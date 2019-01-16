import { Component, OnInit } from '@angular/core';
import {Store} from '@ngrx/store';

import * as fromCart from '../../store/cart.reducers';
import * as CartActions from '../../store/cart.actions';

@Component({
  selector: 'app-cart-page',
  templateUrl: './cart-page.component.html',
  styleUrls: ['./cart-page.component.scss']
})
export class CartPageComponent implements OnInit {

  constructor(private store: Store<fromCart.CartState>) { }

  ngOnInit() {
    this.store.dispatch(new CartActions.TryFetchItems());
  }

}
