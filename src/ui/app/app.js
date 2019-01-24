import React, { Component } from 'react';
import { Link } from 'react-router';
import { connect } from 'react-redux';

import { Div, H1 } from './app.style';
import { getTasks } from '../../core/actions';

export class AppComponent extends Component {
  componentDidMount() {
    this.props.getTasks();
  }
  render() {
    return (
      <Div pt4 flex flex-column className="App">
        <H1 pl4>Mental health app</H1>
        <Link to="/sign-up">Sign up</Link>
        <Link to="/enter-tasks">Enter new tasks</Link>
        <Link to="/view-tasks">View all tasks</Link>
      </Div>
    );
  }
}

const mapStateToProps = state => ({});
const mapDispatchToProps = { getTasks };

export const App = connect(
  mapStateToProps,
  mapDispatchToProps
)(AppComponent);
