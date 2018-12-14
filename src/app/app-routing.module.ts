import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {ShopHomeComponent} from './shop/shop-home/shop-home.component';
import {AdminHomeComponent} from './admin/admin-home/admin-home.component';

const routes: Routes = [
  {path: '', component: ShopHomeComponent},
  {path: 'admin', component: AdminHomeComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
