/**
 * @name redux/index.js
 * @description root reducer
 * @version 0.0.0
 */

import { app } from './app';

const { combineReducers } = require('redux');

const reducer = combineReducers({
  app,
});

export default reducer;
