import React, { Component } from 'react';

// import { ShoutSample } from './shoutSample.component';
import MySampleForm, {
  MyConnectedSampleForm,
  MySecondSampleForm
} from './mySampleForm.component';
import UserForm from './userForm.component';
import TasksForm from './tasksForm.component';

class App extends Component {
  render() {
    return (
      <div className="App" style={{ paddingTop: '50px', textAlign: 'center' }}>
        Mental health app
        {/* <ShoutSample /> */}
        <div style={{ paddingTop: '50px' }}>
          User Form
          <UserForm />
        </div>
        <div style={{ paddingTop: '50px' }}>
          Tasks Form
          <TasksForm />
        </div>
      </div>
    );
  }
}

export default App;
