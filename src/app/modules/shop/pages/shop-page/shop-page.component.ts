import { Component, OnInit } from '@angular/core';
import {Store} from '@ngrx/store';

import * as fromShop from '../../store/shop.reducers';
import * as ShopActions from './../../store/shop.actions';

@Component({
  selector: 'app-shop-page',
  templateUrl: './shop-page.component.html',
  styleUrls: ['./shop-page.component.scss']
})
export class ShopPageComponent implements OnInit {

  constructor(private store: Store<fromShop.ShopState>) { }

  ngOnInit() {
    this.store.dispatch(new ShopActions.TryFetchProducts());
  }

}
