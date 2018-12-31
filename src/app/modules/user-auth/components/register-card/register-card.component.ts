import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {Store} from '@ngrx/store';

import * as fromApp from '@core/store/app.reducer'
import * as AuthActions from '../../store/auth.actions'

@Component({
  selector: 'app-register-card',
  templateUrl: './register-card.component.html',
  styleUrls: ['./register-card.component.scss']
})
export class RegisterCardComponent implements OnInit {
  registerForm: FormGroup;

  constructor(private store: Store<fromApp.AppState>) { }

  ngOnInit() {
    this.initForm();
  }

  register() {

    const email = this.registerForm.controls.email.value;
    const password = this.registerForm.controls.password.value;

    this.store.dispatch(new AuthActions.TryRegister({
      email: email,
      password: password
    }));
  }

  private initForm() {
    this.registerForm = new FormGroup({
      'email': new FormControl('', [Validators.required, Validators.email]),
      'password': new FormControl('', [Validators.required, Validators.minLength(8)])
    })
  }

}
