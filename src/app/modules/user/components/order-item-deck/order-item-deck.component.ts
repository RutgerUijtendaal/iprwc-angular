import { Component, OnInit } from '@angular/core';
import {Store} from '@ngrx/store';

import * as fromUser from '@modules/user/store/user.reducers';
import {Observable} from 'rxjs';

@Component({
  selector: 'app-order-item-deck',
  templateUrl: './order-item-deck.component.html',
  styleUrls: ['./order-item-deck.component.scss']
})
export class OrderItemDeckComponent implements OnInit {
  userState: Observable<fromUser.State>;

  constructor(private store: Store<fromUser.UserState>) { }

  ngOnInit() {
    this.userState = this.store.select('user');
  }

}
