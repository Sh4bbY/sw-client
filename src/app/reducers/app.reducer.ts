import { AppAction } from './index';

export const SET_WINDOW_SIZE = 'SET_WINDOW_SIZE';

export interface IAppState {
  windowSize: { width: number; height: number };
}

export const initialState: IAppState = {
  windowSize: { width: 0, height: 0 },
};

export const reducer = (state: IAppState = initialState, { type, payload }: AppAction): IAppState => {
  switch (type) {
    case SET_WINDOW_SIZE:
      return Object.assign({}, state, {});

    default:
      return state;
  }
};
