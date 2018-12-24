import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ShopHomeComponent } from './shop-home/shop-home.component';
import {ShopRoutingModule} from './shop-routing.module';

@NgModule({
  declarations: [
    ShopHomeComponent
  ],
  imports: [
    CommonModule,
    ShopRoutingModule
  ]
})
export class ShopModule { }
