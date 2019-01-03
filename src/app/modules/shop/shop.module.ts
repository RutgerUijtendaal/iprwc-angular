import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {ShopRoutingModule} from './shop-routing.module';
import { ShopPageComponent } from './pages/shop-page/shop-page.component';
import {SharedModule} from '@shared/shared.module';
import {StoreModule} from '@ngrx/store';
import {shopReducer} from '@modules/shop/store/shop.reducers';
import { ProductCardComponent } from './components/product-card/product-card.component';
import {EffectsModule} from '@ngrx/effects';
import {ShopEffects} from '@modules/shop/store/shop.effects';
import { ProductCardDeckComponent } from './components/product-card-deck/product-card-deck.component';

@NgModule({
  declarations: [
    ShopPageComponent,
    ProductCardComponent,
    ProductCardDeckComponent
  ],
  imports: [
    CommonModule,
    ShopRoutingModule,
    SharedModule,
    StoreModule.forFeature('shop', shopReducer),
    EffectsModule.forFeature([ShopEffects]),
  ]
})
export class ShopModule { }
