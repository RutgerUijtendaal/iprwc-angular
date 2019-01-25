import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {CartPageComponent} from '@modules/cart/pages/cart-page/cart-page.component';
import {UserAuthGuard} from '@modules/user-auth/user-auth-guard.service';
import {SuccesPageComponent} from '@modules/cart/pages/succes-page/succes-page.component';

const routes: Routes = [
  { path: 'cart', component: CartPageComponent, canActivate: [UserAuthGuard]},
  { path: 'cart/success', component: SuccesPageComponent, canActivate: [UserAuthGuard]},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CartRoutingModule { }
