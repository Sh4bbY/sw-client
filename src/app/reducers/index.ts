import { environment } from '../../environments/environment';
/**
 * storeLogger is a powerful metareducer that logs out each time we dispatch
 * an action.
 *
 * A metareducer wraps a reducer function and returns a new reducer function
 * with superpowers. They are handy for all sorts of tasks, including
 * logging, undo/redo, and more.
 */
import { storeLogger } from 'ngrx-store-logger';

import { Action, ActionReducer } from '@ngrx/store';

import * as app from './app.reducer';
import * as user from './user.reducer';

export class AppAction implements Action {
  constructor(public type: string, public payload?: any) {
  }
}

export interface IRootState {
  app: app.IAppState;
  user: user.IUserState;
}

export const reducer = {
  app : app.reducer,
  user: user.reducer,
};

export const initialState = {
  app : app.initialState,
  user: user.initialState,
};

function logger(_reducer: ActionReducer<IRootState>): any {
  return storeLogger({ collapsed: true })(_reducer);
}

export const metaReducers = [];

if (!environment.production) {
  metaReducers.push(logger);
}

