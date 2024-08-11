// rootReducer.js
import { combineReducers } from 'redux';
import authReducer from './auth';
import authVerification from './authVerification';
import getProducts from './products';

export default combineReducers({
  auth: authReducer,
  verification: authVerification,
  products :getProducts
});
