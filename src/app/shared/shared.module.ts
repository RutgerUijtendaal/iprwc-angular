import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DropdownDirective } from './directives/dropdown.directive';
import { MaterialModule } from '../material/material.module';
import { UserCredentialsComponent } from './forms/user-credentials/user-credentials.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';
import {FlexLayoutModule} from '@angular/flex-layout';
import {CentsCurrencyPipe} from '@shared/pipes/cents-currency.pipe';
import {FilterPipe} from '@shared/pipes/filter.pipe';
import { SubheaderComponent } from './components/subheader/subheader.component';
import {Numbers} from '@shared/directives/numbers.directive';
import {Uppercase} from '@shared/directives/upercase.directive';
import {Letters} from '@shared/directives/letters.directive';

@NgModule({
  declarations: [
    DropdownDirective,
    UserCredentialsComponent,
    CentsCurrencyPipe,
    FilterPipe,
    SubheaderComponent,
    Numbers,
    Uppercase,
    Letters
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
    CentsCurrencyPipe,
    FilterPipe,
    SubheaderComponent,
    Numbers,
    Uppercase,
    Letters
  ]
})
export class SharedModule { }
