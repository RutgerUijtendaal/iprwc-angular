import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { SharedModule } from '@shared/shared.module';
import { FooterComponent } from './footer/footer.component';
import { HeaderComponent } from './header/header.component';
import {HTTP_INTERCEPTORS} from '@angular/common/http';
import {UserAuthInterceptor} from '@modules/user-auth/user-auth.interceptor';
import {LoggingInterceptor} from '@shared/interceptors/logging.interceptor';

@NgModule({
  declarations: [
    FooterComponent,
    HeaderComponent,
  ],
  imports: [
    CommonModule,
    SharedModule,
    RouterModule,

  ],
  exports: [
    FooterComponent,
    HeaderComponent,
  ],
  providers: [
    {provide: HTTP_INTERCEPTORS, useClass: UserAuthInterceptor, multi: true},
    {provide: HTTP_INTERCEPTORS, useClass: LoggingInterceptor, multi: true}
  ]

})
export class CoreModule { }
