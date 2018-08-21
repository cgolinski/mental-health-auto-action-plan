import React, { Component } from 'react';

// import { ShoutSample } from '../shoutSample.component';
import { UserForm } from '../userForm/userForm.component';
import { TasksForm } from '../tasksForm';
import { TasksIntro } from '../tasksIntro/tasksIntro.component';

import { Div, H1 } from './app.style';

export class App extends Component {
  render() {
    return (
      <Div
        className="App"
        style={{
          paddingTop: '50px',
          color: 'rgba(0, 0, 0, 0.8)'
        }}
      >
        <H1 pl4>Mental health app</H1>
        {/* <ShoutSample /> */}
        <UserForm />
        <Div pt6>
          <TasksIntro />
          <TasksForm />
        </Div>
      </Div>
    );
  }
}
