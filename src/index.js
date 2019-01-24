import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { Router, Route, browserHistory } from 'react-router';
import { syncHistoryWithStore } from 'react-router-redux';
import { createStore, applyMiddleware } from 'redux';
import { createLogger } from 'redux-logger';
import { createEpicMiddleware } from 'redux-observable';
import 'tachyons';

import rootEpic from './core/epics';
import rootReducer from './core/reducers';
import './index.css';
import registerServiceWorker from './registerServiceWorker';
import { App } from './ui/app';
import { UserForm } from './ui/userForm/userForm.component';
import { EnterTasksPage } from './ui/enterTasksPage/enterTasksPage.component';
import { ViewTasksPage } from './ui/viewTasksPage/viewTasksPage.component';

const epicMiddleware = createEpicMiddleware();
const loggerMiddleware = createLogger();

const store = createStore(
  rootReducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(),
  applyMiddleware(epicMiddleware, loggerMiddleware)
);

epicMiddleware.run(rootEpic);

const history = syncHistoryWithStore(browserHistory, store);

const ReduxApp = () => (
  <Provider store={store}>
    <Router history={history}>
      <Route path="/" component={App} />
      <Route path="sign-up" component={UserForm} />
      <Route path="enter-tasks" component={EnterTasksPage} />
      <Route path="view-tasks" component={ViewTasksPage} />
    </Router>
  </Provider>
);

ReactDOM.render(<ReduxApp />, document.getElementById('root'));
registerServiceWorker();
