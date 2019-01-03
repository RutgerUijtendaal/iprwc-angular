import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {ProfilePageComponent} from '@modules/user/pages/profile-page/profile-page.component';

const routes: Routes = [
  { path: '', redirectTo: 'me', pathMatch: 'full'},
  { path: 'me', component: ProfilePageComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UserRoutingModule { }
