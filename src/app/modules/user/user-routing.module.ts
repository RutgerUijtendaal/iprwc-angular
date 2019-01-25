import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {ProfilePageComponent} from '@modules/user/pages/profile-page/profile-page.component';
import {OrderDetailComponent} from '@modules/user/pages/order-detail/order-detail.component';

const routes: Routes = [
  { path: '', redirectTo: 'me', pathMatch: 'full'},
  { path: 'me', component: ProfilePageComponent },
  { path: 'details', component: OrderDetailComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UserRoutingModule { }
