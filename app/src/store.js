import PolymerRedux from 'polymer-redux/src';
import { createStore, applyMiddleware, compose, combineReducers } from 'redux';
import thunk from 'redux-thunk';

import { reducer as authReducer } from 'modules/auth';
import { reducer as dashboardReducer } from 'modules/dashboard';

const reducer = combineReducers({
  auth: authReducer,
  dashboard: dashboardReducer,
});

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(reducer, composeEnhancers(
  applyMiddleware(thunk)
));

const ReduxMixin = PolymerRedux(store);
export default ReduxMixin;
