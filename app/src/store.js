import PolymerRedux from 'polymer-redux/src';
import { createStore, applyMiddleware, compose, combineReducers } from 'redux';
import thunk from 'redux-thunk';

import { reducer as authReducer } from 'modules/auth';

const reducer = combineReducers({
  auth: authReducer,
});

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(reducer, composeEnhancers(
  applyMiddleware(thunk)
));

const ReduxMixin = PolymerRedux(store);
export default ReduxMixin;
