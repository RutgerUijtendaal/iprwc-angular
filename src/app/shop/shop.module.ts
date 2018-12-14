import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ShopHomeComponent } from './shop-home/shop-home.component';

@NgModule({
  declarations: [
    ShopHomeComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    ShopHomeComponent
  ]
})
export class ShopModule { }
