import { Component, OnInit } from '@angular/core';
import {Store} from '@ngrx/store';
import {Observable} from 'rxjs';

import * as ShopActions from '@modules/shop/store/shop.actions'
import * as fromShop from '@modules/shop/store/shop.reducers';

@Component({
  selector: 'app-shop-header',
  templateUrl: './shop-header.component.html',
  styleUrls: ['./shop-header.component.scss']
})
export class ShopHeaderComponent implements OnInit {
  shopState: Observable<fromShop.State>;


  constructor(private store: Store<fromShop.ShopState>) { }

  ngOnInit() {
    this.shopState = this.store.select('shop');
  }

  resetFilter() {
    this.store.dispatch(new ShopActions.ResetFilter())
  }

  filterShop(productTypeId: number) {
    this.store.dispatch(new ShopActions.FilterProducts(productTypeId))
  }



}
