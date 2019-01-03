import { Component, OnInit } from '@angular/core';
import {Store} from '@ngrx/store';
import {Observable} from 'rxjs';

import * as fromShop from '@modules/shop/store/shop.reducers';

@Component({
  selector: 'app-product-card-deck',
  templateUrl: './product-card-deck.component.html',
  styleUrls: ['./product-card-deck.component.scss']
})
export class ProductCardDeckComponent implements OnInit {
  shopState: Observable<fromShop.State>;

  constructor(private store: Store<fromShop.ShopState>) { }

  ngOnInit() {
    this.shopState = this.store.select('shop');
  }

}
