import { combineReducers } from 'redux';

const INITIAL_STATE = {
  language: 'en',
};

const languageReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    default:
      return state
  }
};

export default combineReducers({
  language: languageReducer,
});