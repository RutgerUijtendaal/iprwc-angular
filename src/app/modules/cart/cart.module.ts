import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CartRoutingModule } from './cart-routing.module';
import { CartPageComponent } from './pages/cart-page/cart-page.component';
import { CartItemComponent } from './components/cart-item/cart-item.component';
import { CartItemDeckComponent } from './components/cart-item-deck/cart-item-deck.component';
import {SharedModule} from '@shared/shared.module';
import {StoreModule} from '@ngrx/store';
import {cartReducer} from '@modules/cart/store/cart.reducers';
import {EffectsModule} from '@ngrx/effects';
import {CartEffects} from '@modules/cart/store/cart.effects';
import { CartSumComponent } from './components/cart-sum/cart-sum.component';
import { CartBottomComponent } from './components/cart-bottom/cart-bottom.component';
import { SuccesPageComponent } from './pages/succes-page/succes-page.component';

@NgModule({
  declarations: [
    CartPageComponent,
    CartItemComponent,
    CartItemDeckComponent,
    CartSumComponent,
    CartBottomComponent,
    SuccesPageComponent
  ],
  imports: [
    CommonModule,
    CartRoutingModule,
    SharedModule,
    StoreModule.forFeature('cart', cartReducer),
    EffectsModule.forFeature([CartEffects]),
  ]
})
export class CartModule { }
