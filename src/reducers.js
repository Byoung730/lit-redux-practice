import {
  DO_THING
} from './actions.js';

export const initialState = {};
export const DEFAULT_ACTION = '';

/* Define reducers */
export const litReduxApp = (state = initialState, action = DEFAULT_ACTION) => {
  switch (action.type) {
    case DO_THING:
      {
        return Object.assign({}, state, {
          data: action.data
        });
      }
    default:
      {
        return state;
      }
  }
}