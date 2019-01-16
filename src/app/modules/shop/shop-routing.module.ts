import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ShopPageComponent } from '@modules/shop/pages/shop-page/shop-page.component';

const shopRoutes: Routes = [
  {path: '', component: ShopPageComponent },
];

@NgModule({
  imports: [RouterModule.forChild(shopRoutes)],
  exports: [RouterModule]
})
export class ShopRoutingModule { }
