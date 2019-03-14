import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import thunkMiddleware from 'redux-thunk';
import createSagaMiddleware from 'redux-saga';
import { createLogger } from 'redux-logger';
import rootReducer from './rootReducer';
import rootSaga from './rootSagas';
import App from './App';

const sagaMiddleware = createSagaMiddleware();
const loggerMiddleware = createLogger();

const store = createStore(
  rootReducer,
  applyMiddleware(thunkMiddleware, sagaMiddleware, loggerMiddleware),
);

sagaMiddleware.run(rootSaga);

ReactDOM.render((
  <Provider store={store}>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </Provider>
), document.getElementById('root'));
