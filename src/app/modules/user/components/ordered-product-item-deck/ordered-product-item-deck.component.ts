import { Component, OnInit } from '@angular/core';
import {Observable} from 'rxjs';
import * as fromUser from '@modules/user/store/user.reducers';
import {Store} from '@ngrx/store';

@Component({
  selector: 'app-ordered-product-item-deck',
  templateUrl: './ordered-product-item-deck.component.html',
  styleUrls: ['./ordered-product-item-deck.component.scss']
})
export class OrderedProductItemDeckComponent implements OnInit {
  userState: Observable<fromUser.State>;

  constructor(private store: Store<fromUser.UserState>) { }

  ngOnInit() {
    this.userState = this.store.select('user');
  }

}
