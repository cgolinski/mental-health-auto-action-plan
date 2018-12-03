import React, { Component } from 'react';
import { Link } from 'react-router';

// import { ShoutSample } from '../shoutSample.component';

import { Div, H1 } from './app.style';
import { getTasks } from '../../core/api/tasks.api.js';

export class App extends Component {
  componentDidMount() {
    getTasks();
  }
  render() {
    return (
      <Div pt4 flex flex-column className="App">
        <H1 pl4>Mental health app</H1>
        {/* <ShoutSample /> */}
        <Link to="/sign-up">Sign up</Link>
        <Link to="/enter-tasks">Enter tasks</Link>
      </Div>
    );
  }
}
