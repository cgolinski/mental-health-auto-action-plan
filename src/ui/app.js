import React, { Component } from 'react';

// import { ShoutSample } from './shoutSample.component';
import MySampleForm, {
  MyConnectedSampleForm,
  MySecondSampleForm
} from './mySampleForm.component';
import UserForm from './userForm.component';
import TasksForm from './tasksForm.component';
import { TasksIntro } from './tasksIntro.component';
import { Div, H1 } from './app.style';

class App extends Component {
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

export default App;
