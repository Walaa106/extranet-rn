import { combineReducers } from 'redux';
import { reducer as formReducer } from 'redux-form';
import homeReducer from 'container/HomeContainer/reducer.js';

export default combineReducers({
  form: formReducer,
  homeReducer,
});
