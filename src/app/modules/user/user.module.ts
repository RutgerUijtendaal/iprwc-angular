import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UserRoutingModule } from './user-routing.module';
import { SharedModule } from '../../shared/shared.module';
import { ProfilePageComponent } from './pages/profile-page/profile-page.component';
import {StoreModule} from '@ngrx/store';
import {userReducers} from '@modules/user/store/user.reducers';
import {EffectsModule} from '@ngrx/effects';
import {UserEffects} from '@modules/user/store/user.effects';
import { OrderItemComponent } from './components/order-item/order-item.component';
import { OrderItemDeckComponent } from './components/order-item-deck/order-item-deck.component';
import { OrderHeaderComponent } from './components/order-header/order-header.component';
import { OrderDetailComponent } from './pages/order-detail/order-detail.component';
import { OrderedProductItemDeckComponent } from './components/ordered-product-item-deck/ordered-product-item-deck.component';
import { OrderedProductItemComponent } from './components/ordered-product-item/ordered-product-item.component';

@NgModule({
  declarations: [
    ProfilePageComponent,
    OrderItemComponent,
    OrderItemDeckComponent,
    OrderHeaderComponent,
    OrderDetailComponent,
    OrderedProductItemDeckComponent,
    OrderedProductItemComponent
  ],
  imports: [
    CommonModule,
    UserRoutingModule,
    SharedModule,
    StoreModule.forFeature('user', userReducers),
    EffectsModule.forFeature([UserEffects])
  ]
})
export class UserModule { }
