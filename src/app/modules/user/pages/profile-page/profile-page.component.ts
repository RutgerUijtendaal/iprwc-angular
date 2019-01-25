import { Component, OnInit } from '@angular/core';
import {Observable} from 'rxjs';
import {Store} from '@ngrx/store';

import * as fromUser from '../../store/user.reducers';
import * as UserActions from '../../store/user.actions';

@Component({
  selector: 'app-profile-page',
  templateUrl: './profile-page.component.html',
  styleUrls: ['./profile-page.component.scss']
})
export class ProfilePageComponent implements OnInit {
  userState: Observable<fromUser.State>;

  constructor(private store: Store<fromUser.UserState>) { }

  ngOnInit() {
    this.userState = this.store.select('user');
    this.store.dispatch(new UserActions.TryFetchPaymentType());
    this.store.dispatch(new UserActions.TryFetchOrderStatus());
    this.store.dispatch(new UserActions.TryFetchOrders());
  }

}
