import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./components/App";
import {Provider} from 'react-redux';
import {createStore, applyMiddleware} from 'redux';
import thunk from 'redux-thunk';
 import {reducer} from '../src/reducers/reducer'
 import logger from 'redux-logger'


const myThunk = (store) => (next) => (action) => {
   if (typeof action === 'object') {
      next(action)
   }
   else if (typeof action === 'function'){
      action(store.dispatch)
   }
}


const store = createStore(reducer, applyMiddleware(thunk, logger))
ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>
, document.getElementById("root"));
