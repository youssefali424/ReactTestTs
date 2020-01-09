import { combineReducers } from 'redux';
import {AsyncStorage} from 'react-native';
import strings from './localStrings';

const INITIAL_STATE = {
  language: 'en',
};

const languageReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    default:
      return state
  }
};
let retrieveLanguage = async () => {
    try {
      const value = await AsyncStorage.getItem('@Language');
      if (value !== null) {
        console.log(value);
        return value;
      }
      return null;
    } catch (error) {
      // Error retrieving data
    }
  };
export default combineReducers({
  language: languageReducer,
});