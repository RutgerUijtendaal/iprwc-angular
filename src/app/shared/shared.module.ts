import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DropdownDirective } from './directives/dropdown.directive';
import { MaterialModule } from '../material/material.module';
import { UserCredentialsComponent } from './forms/user-credentials/user-credentials.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';
import {FlexLayoutModule} from '@angular/flex-layout';
import {CentsCurrencyPipe} from '@shared/pipes/cents-currency.pipe';

@NgModule({
  declarations: [
    DropdownDirective,
    UserCredentialsComponent,
    CentsCurrencyPipe
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    MaterialModule,
    HttpClientModule,
    FlexLayoutModule
  ],
  exports: [
    DropdownDirective,
    UserCredentialsComponent,
    FormsModule,
    ReactiveFormsModule,
    MaterialModule,
    HttpClientModule,
    FlexLayoutModule,
    CentsCurrencyPipe
  ]
})
export class SharedModule { }
