import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import {ProductHomeComponent} from './pages/product-home/product-home.component';
import {AddProductComponent} from './components/add-product/add-product.component';


const adminProductRoutes: Routes = [
  { path: '',
    component: ProductHomeComponent,
    children: [
      { path: 'new', component: AddProductComponent }
    ]},
];

@NgModule({
  imports: [RouterModule.forChild(adminProductRoutes)],
  exports: [RouterModule]
})
export class AdminProductRoutingModule { }
