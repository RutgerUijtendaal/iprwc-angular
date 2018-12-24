import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ShopHomeComponent } from './shop-home/shop-home.component';

const shopRoutes: Routes = [
  {path: '', component: ShopHomeComponent},
];

@NgModule({
  imports: [RouterModule.forChild(shopRoutes)],
  exports: [RouterModule]
})
export class ShopRoutingModule { }
