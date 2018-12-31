import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {ProfilePageComponent} from '@modules/user-profile/pages/profile-page/profile-page.component';
import {UserAuthGuard} from '@modules/user-auth/user-auth-guard.service';

const routes: Routes = [
  { path: 'me', component: ProfilePageComponent, canActivate: [UserAuthGuard] }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UserRoutingModule { }
