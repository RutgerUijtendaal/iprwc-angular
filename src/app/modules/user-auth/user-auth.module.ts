import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UserAuthRoutingModule } from './user-auth-routing.module';
import { RegisterPageComponent } from './pages/register-page/register-page.component';
import { LoginPageComponent } from './pages/login-page/login-page.component';
import { LoginCardComponent } from './components/login-card/login-card.component';
import {SharedModule} from '@shared/shared.module';
import { RegisterCardComponent } from './components/register-card/register-card.component';
import { RegisterFormComponent } from './components/register-form/register-form.component';

@NgModule({
  declarations: [
    RegisterPageComponent,
    LoginPageComponent,
    LoginCardComponent,
    RegisterCardComponent,
    RegisterFormComponent
  ],
  imports: [
    CommonModule,
    UserAuthRoutingModule,
    SharedModule,
  ],
  providers: [
  ]
})
export class UserAuthModule { }
