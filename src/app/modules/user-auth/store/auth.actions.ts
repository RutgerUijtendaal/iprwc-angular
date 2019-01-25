import { Action } from '@ngrx/store';

export const TRY_REGISTER = 'TRY_REGISTER';
export const REGISTER = 'REGISTER';
export const TRY_LOGIN = 'TRY_LOGIN';
export const LOGIN = 'LOGIN';
export const LOGOUT = 'LOGOUT';
export const SET_TOKEN = 'SET_TOKEN';

export class TryRegister implements Action {
  readonly type = TRY_REGISTER;

  constructor(
    public payload: {
      email: string,
      password: string,
      firstname: string,
      lastname: string,
      streetname: string,
      housenumber: number,
      zipnumbers: number,
      zipletters: string
    }) {}
}

export class Register implements Action {
  readonly type = REGISTER;
}

export class TryLogin implements Action {
  readonly type = TRY_LOGIN;

  constructor(public payload: {email: string, password: string}) {}
}

export class Login implements Action {
  readonly type = LOGIN;
}

export class Logout implements Action {
  readonly type = LOGOUT;
}

export class SetToken implements Action {
  readonly type = SET_TOKEN;

  constructor(public payload: string) {

  }
}

export type AuthActions = TryRegister | Register | TryLogin | Login | Logout | SetToken;
