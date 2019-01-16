import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import * as AuthActions from '@modules/user-auth/store/auth.actions';
import {Store} from '@ngrx/store';

import * as fromApp from '@core/store/app.reducer';
import * as CartActions from '@modules/cart/store/cart.actions';

@Component({
  selector: 'app-login-card',
  templateUrl: './login-card.component.html',
  styleUrls: ['./login-card.component.scss']
})
export class LoginCardComponent implements OnInit {
  loginForm: FormGroup;

  constructor(private store: Store<fromApp.AppState>) { }

  ngOnInit() {
    this.initForm();
  }

  login() {
    const email = this.loginForm.controls.email.value;
    const password = this.loginForm.controls.password.value;


    this.store.dispatch(new AuthActions.TryLogin({
      email: email,
      password: password
    }));
  }

  private initForm() {
    this.loginForm = new FormGroup({
      'email': new FormControl('', [Validators.required, Validators.email]),
      'password': new FormControl('', [Validators.required, Validators.minLength(8)])
    });
  }

}
