import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {Store} from '@ngrx/store';

import * as fromApp from '@core/store/app.reducer';
import * as AuthActions from '../../store/auth.actions';

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
    const firstname = this.registerForm.controls.firstname.value;
    const lastname = this.registerForm.controls.lastname.value;
    const streetname = this.registerForm.controls.streetname.value;
    const housenumber = this.registerForm.controls.housenumber.value;
    const zipnumbers = this.registerForm.controls.zipnumbers.value;
    const zipletters = this.registerForm.controls.zipletters.value;

    this.store.dispatch(new AuthActions.TryRegister({
      email: email,
      password: password,
      firstname: firstname,
      lastname: lastname,
      streetname: streetname,
      housenumber: housenumber,
      zipnumbers: zipnumbers,
      zipletters: zipletters
    }));
  }

  private initForm() {
    this.registerForm = new FormGroup({
      'email': new FormControl('', [Validators.required, Validators.email]),
      'password': new FormControl('', [Validators.required, Validators.minLength(8)]),
      'firstname': new FormControl('', [Validators.required]),
      'lastname': new FormControl('', [Validators.required]),
      'streetname': new FormControl('', [Validators.required]),
      'housenumber': new FormControl('', [Validators.required]),
      'zipnumbers': new FormControl('', [Validators.required, Validators.minLength(4), Validators.maxLength(4)]),
      'zipletters': new FormControl('', [Validators.required, Validators.minLength(2), Validators.maxLength(2)])
    });
  }

}
