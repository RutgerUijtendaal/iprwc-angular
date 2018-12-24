import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import {AdminHomeComponent} from './pages/admin-home/admin-home.component';

const adminRoutes: Routes = [
  { path: '', component: AdminHomeComponent},
  { path: 'product', loadChildren: '../admin-product/admin-product.module#AdminProductModule'}

];

@NgModule({
  imports: [RouterModule.forChild(adminRoutes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }
