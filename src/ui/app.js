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
      <div
        className="App"
        style={{
          paddingTop: '50px',
          color: 'rgba(0, 0, 0, 0.8)'
        }}
      >
        Mental health app
        {/* <ShoutSample /> */}
        <UserForm />
        <div style={{ paddingTop: '50px' }}>
          <div>
            Think about what basic supports you would need should you reach a
            point when your mental health is not great, and you are not able to
            take care of these things yourself. Contact each person in your
            support network (friend, family, colleague, neighbour?), and the
            enter the tasks you have discussed with them. Should you reach that
            point when you need to activate this plan, you will click one
            button, and an email will be sent to each person in your plan,
            requesting their help.
          </div>
          <div style={{ paddingTop: '50px' }}>
            Task ideas to get you started:
          </div>
          <ul style={{ textDecoration: 'none', paddingBottom: '50px' }}>
            <li>Buy groceries</li>
            <li>Prepare healthy meals</li>
            <li>Do laundry</li>
            <li>Walk the dog</li>
            <li>Feed the cats</li>
            <li>Take the children to school</li>
            <li>Help me pay bills</li>
            <li>Take me to my therapy appointment</li>
          </ul>
          <TasksForm />
        </div>
      </div>
    );
  }
}

export default App;
