import {Component, Input, OnInit} from '@angular/core';
import {Product} from '@shared/models/product.model';
import {Store} from '@ngrx/store';
import {Observable} from 'rxjs';

import * as fromApp from '@core/store/app.reducer';
import * as fromAuth from '@modules/user-auth/store/auth.reducers';

import * as CartActions from '@modules/cart/store/cart.actions';

@Component({
  selector: 'app-product-card',
  templateUrl: './product-card.component.html',
  styleUrls: ['./product-card.component.scss']
})
export class ProductCardComponent implements OnInit {
  @Input() product: Product;
  authState: Observable<fromAuth.State>;

  constructor(private store: Store<fromApp.AppState>) { }

  ngOnInit() {
    this.authState = this.store.select('auth');
  }

  addToCart() {

    this.store.dispatch(new CartActions.TryAddItem(this.product));
  }

}
