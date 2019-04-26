import {composeWithDevTools} from 'redux-devtools-extension';
import {LocalizeProvider} from 'react-localize-redux';
import {applyMiddleware, createStore} from 'redux';
import rootReducer from './rootReducer';
import {Provider} from 'react-redux';
import thunk from 'redux-thunk';
import React from 'react';


/**
 * Here we create our store
 * @type {any}
 */
const store = createStore(rootReducer,
  composeWithDevTools(
    applyMiddleware(thunk)
  )
);

/**
 * Create a Root wrapper that will provide the Store
 * provider to wrapped elements.
 *
 * We separate this for allow use on testings and index.
 * @param props
 * @returns {*}
 */
export default (props) => {
  return (
    <LocalizeProvider store={store}>
      <Provider store={store}>
        {props.children}
      </Provider>
    </LocalizeProvider>
  )
};