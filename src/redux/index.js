import { app } from './app';
const { combineReducers } = require('redux');

const reducer = combineReducers({
  app,
});

export default reducer;
