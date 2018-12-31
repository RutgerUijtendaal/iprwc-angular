import * as AuthActions from './auth.actions';

export interface State {
  token: string;
  authenticated: boolean;
}

const initialState: State = {
  token: null,
  authenticated: false
};

export function authReducer(state = initialState, action: AuthActions.AuthActions) {

  switch(action.type) {
    case (AuthActions.LOGIN):
      console.log('Login fired');
      return {
        ...state,
        authenticated: true
      };
    case (AuthActions.REGISTER):
      console.log('Register fired');
      return {
        ...state
      };
    case (AuthActions.LOGOUT):
      console.log('Logout fired');
      return {
        ...state,
        token: null,
        authenticated: false
      };
    case (AuthActions.SET_TOKEN):
      console.log('SetToken fired');
      console.log(action.payload);
      return {
        ...state,
        token: action.payload
      };
    default:
      return state;
  }
}

