import React, { Component } from 'react';

import { Shout } from './shout.component';

class App extends Component {
  render() {
    return (
      <div className="App" style={{ paddingTop: '50px', textAlign: 'center' }}>
        Mental health app
        <Shout />
      </div>
    );
  }
}

export default App;
