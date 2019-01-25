import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {UserAuthGuard} from '@modules/user-auth/user-auth-guard.service';

const routes: Routes = [
  {path: 'admin', loadChildren: './modules/admin/admin.module#AdminModule'},
  {path: 'shop', loadChildren: './modules/shop/shop.module#ShopModule'},
  {path: 'user', loadChildren: './modules/user/user.module#UserModule', canActivate: [UserAuthGuard]},
  {path: 'home', loadChildren: './modules/home/home.module#HomeModule' },
  {path: '', redirectTo: 'home', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
