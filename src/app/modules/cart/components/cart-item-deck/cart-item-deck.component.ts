import { Component, OnInit } from '@angular/core';
import {Store} from '@ngrx/store';

import * as fromCart from '@modules/cart/store/cart.reducers';
import {Observable} from 'rxjs';

@Component({
  selector: 'app-cart-item-deck',
  templateUrl: './cart-item-deck.component.html',
  styleUrls: ['./cart-item-deck.component.scss']
})
export class CartItemDeckComponent implements OnInit {
  cartState: Observable<fromCart.State>;

  constructor(private store: Store<fromCart.CartState>) { }

  ngOnInit() {
    this.cartState = this.store.select('cart');
  }

}
