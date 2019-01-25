import {Component, OnDestroy, OnInit} from '@angular/core';
import {Observable} from 'rxjs';
import * as fromCart from '@modules/cart/store/cart.reducers';
import {Store} from '@ngrx/store';
import {map} from 'rxjs/operators';

@Component({
  selector: 'app-cart-sum',
  templateUrl: './cart-sum.component.html',
  styleUrls: ['./cart-sum.component.scss']
})
export class CartSumComponent implements OnInit, OnDestroy {
  cartState: Observable<fromCart.State>;
  totalSum: number = 0;
  totalCount: number = 0;

  constructor(private store: Store<fromCart.CartState>) { }

  ngOnInit() {
    this.cartState = this.store.select('cart');

    this.cartState.pipe(
      map( (cartState) => {
        this.totalSum = 0;
        this.totalCount = 0;
        cartState.cart.forEach((cartItem) => {
          this.totalSum += (cartItem.product.price * cartItem.itemCount)
          this.totalCount += cartItem.itemCount;
        })
      })
    ).subscribe()
  }

  ngOnDestroy() {

  }


}
