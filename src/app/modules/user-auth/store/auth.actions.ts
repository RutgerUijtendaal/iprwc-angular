import { Action } from '@ngrx/store';

export const TRY_REGISTER = 'TRY_REGISTER';

export const LOGIN = 'LOGIN';
export const REGISTER = 'REGISTER';
export const LOGOUT = 'LOGOUT';
export const SET_TOKEN = 'SET_TOKEN';

export class TryRegister implements Action {
  readonly type = TRY_REGISTER;

  constructor(public payload: {email: string, password: string}) {}
}

export class Login implements Action {
  readonly type = LOGIN;
}

export class Register implements Action {
  readonly type = REGISTER;
}

export class Logout implements Action {
  readonly type = LOGOUT;
}

export class SetToken implements Action {
  readonly type = SET_TOKEN;

  constructor(public payload: string) {

  }
}

export type AuthActions = TryRegister | Login | Register | Logout | SetToken;
