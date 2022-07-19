import { configureStore } from '@reduxjs/toolkit';
import { createStore, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import thunk from 'redux-thunk';
import rootReducer from './reducers';
import alert from './reducers/alert';
import auth from './reducers/auth';
import profile from './reducers/profile';
import alljobs from './reducers/alljobs';
import activejob from './reducers/activejob';
import print from './reducers/print.js'
const reducers = {
  alert,
  auth,
  profile,
  alljobs,
  activejob,
  print,
};

const initialState = {};

const Middleware = [thunk];

const store = configureStore({
  reducer: reducers,
  middleware: Middleware,
});
// const store = createStore(
//   rootReducer,
//   initialState,
//   composeWithDevTools(applyMiddleware(...middleware))
// );

export default store;
