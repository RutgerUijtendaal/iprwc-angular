import {Component, Input, OnInit} from '@angular/core';
import {CartItem} from '@shared/models/cart-item.model';
import {Store} from '@ngrx/store';

import * as fromApp from '@core/store/app.reducer';
import * as CartActions from '../../store/cart.actions'

@Component({
  selector: 'app-cart-item',
  templateUrl: './cart-item.component.html',
  styleUrls: ['./cart-item.component.scss']
})
export class CartItemComponent implements OnInit {
  @Input() cartItem: CartItem;

  constructor(private store: Store<fromApp.AppState>) { }

  ngOnInit() {
  }

  addAmount() {
    this.cartItem.itemCount = this.cartItem.itemCount + 1;
    this.updateItem();
  }

  subtractAmount() {
    if(this.cartItem.itemCount > 1) {
      this.cartItem.itemCount = this.cartItem.itemCount - 1;
      this.updateItem();
    }
  }

  delete() {
    this.store.dispatch( new CartActions.TryRemoveItem(this.cartItem))
  }

  updateItem() {
    this.store.dispatch(new CartActions.TryUpdateItem(this.cartItem))
  }

}
