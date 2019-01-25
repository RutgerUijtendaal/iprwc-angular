import {Component, Input, OnInit} from '@angular/core';
import {Order} from '@shared/models/order.model';
import {Observable} from 'rxjs';
import * as fromUser from '@modules/user/store/user.reducers';
import * as UserActions from '@modules/user/store/user.actions';
import {Store} from '@ngrx/store';
import {OrderStatus} from '@shared/models/order-status.model';
import {map} from 'rxjs/operators';
import {PaymentType} from '@shared/models/payment-type.model';
import {Router} from '@angular/router';

@Component({
  selector: 'app-order-item',
  templateUrl: './order-item.component.html',
  styleUrls: ['./order-item.component.scss']
})
export class OrderItemComponent implements OnInit {
  @Input() orderItem: Order;
  userState: Observable<fromUser.State>;
  orderStatuses: OrderStatus[];
  paymentTypes: PaymentType[];

  constructor(private store: Store<fromUser.UserState>, private router: Router) { }

  ngOnInit() {
    this.userState = this.store.select('user');

    this.userState.pipe(
      map( (userState) => {
        this.orderStatuses = userState.orderStatus;
        this.paymentTypes = userState.paymentTypes;
      })
    ).subscribe()
  }

  viewOrder(orderId: number) {
    this.store.dispatch(new UserActions.TryFetchOrderedProducts(orderId))
    this.router.navigate(['user/details']);
  }

}
