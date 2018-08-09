import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import { createLogger } from 'redux-logger';
import { Router, Route, browserHistory } from 'react-router';
import { syncHistoryWithStore } from 'react-router-redux';

import rootReducer from './redux/reducers';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';

const loggerMiddleware = createLogger();

const store = createStore(
  rootReducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(),
  applyMiddleware(loggerMiddleware)
);

const history = syncHistoryWithStore(browserHistory, store);

const ReduxApp = () => (
  <Provider store={store}>
    <Router history={history}>
      <Route path="/" component={App} />
    </Router>
  </Provider>
);

ReactDOM.render(<ReduxApp />, document.getElementById('root'));
registerServiceWorker();
