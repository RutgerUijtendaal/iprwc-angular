import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';

import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';

import { CoreModule } from '@core/core.module';
import { reducers } from '@core/store/app.reducer';

import { AuthEffects } from '@modules/user-auth/store/auth.effects';
import {UserAuthGuard} from '@modules/user-auth/user-auth-guard.service';

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    RouterModule,
    CoreModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    StoreModule.forRoot(reducers),
    EffectsModule.forRoot([ AuthEffects ])
  ],
  providers: [UserAuthGuard],
  bootstrap: [AppComponent]
})
export class AppModule { }
