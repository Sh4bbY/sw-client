import * as log from 'loglevel';
import { AppAction } from './index';

export const REGISTRATION_SUCCESS = 'REGISTRATION_SUCCESS';
export const LOGIN_SUCCESS        = 'LOGIN_SUCCESS';
export const LOGIN_FAILED         = 'LOGIN_FAILED';
export const LOGOUT_SUCCESS       = 'LOGOUT_SUCCESS';
export const UNAUTHENTICATED      = 'UNAUTHENTICATED';

export interface IUserState {
  id: string;
  name: string;
  email: string;
  isAuthenticated: boolean;
  isVerified: boolean;
  createdAt: Date;
  roles: string[];
  isAuthPending: boolean;
}

export const initialState: IUserState = {
  id             : '',
  name           : 'Guest',
  email          : '',
  isAuthenticated: false,
  isVerified     : false,
  createdAt      : null,
  roles          : [ 'guest' ],
  isAuthPending  : true,
};

export const reducer = (state: IUserState = initialState, { type, payload }: AppAction): IUserState => {
  switch (type) {
    case UNAUTHENTICATED:
      return Object.assign({}, state, { isAuthPending: false });

    case LOGIN_FAILED:
      log.warn('login failed');
      return state;

    case LOGIN_SUCCESS:
      const userLoginData = {
        id             : payload.id,
        name           : payload.username,
        email          : payload.email,
        createdAt      : payload.createdAt,
        isAuthenticated: true,
        isAuthPending  : false,
      };

      return Object.assign({}, state, userLoginData);

    case REGISTRATION_SUCCESS:
      const userRegistrationData = {
        // id             : payload.id,
        // name           : payload.name,
        // email          : payload.email,
        // createdAt      : payload.createdAt,
        isAuthenticated: true,
        isAuthPending  : false,
      };
      return Object.assign({}, state, userRegistrationData);

    case LOGOUT_SUCCESS:
      return Object.assign({}, initialState, { isAuthPending: false });

    default:
      return state;
  }
};
