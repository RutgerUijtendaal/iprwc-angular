import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AddProductComponent } from './components/add-product/add-product.component';
import {AdminProductRoutingModule} from './admin-product-routing.module';
import { ProductHomeComponent } from './pages/product-home/product-home.component';

@NgModule({
  declarations: [AddProductComponent, ProductHomeComponent],
  imports: [
    CommonModule,
    AdminProductRoutingModule
  ]
})
export class AdminProductModule { }
