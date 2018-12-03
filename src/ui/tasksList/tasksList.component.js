import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router';

import { Div } from '../app/app.style';

export const TasksListComponent = ({ tasksList }) => (
  <Div pa3>
    {!tasksList.length ? (
      <Link to="/">
        If you don't see any tasks, click here to go to the homepage and then
        click "view all tasks".
      </Link>
    ) : (
      tasksList.length > 0 && (
        <React.Fragment>
          <Div pa3>These are your current tasks:</Div>
          <Div pa3>Tasks List:</Div>
        </React.Fragment>
      )
    )}
    {tasksList.map((task, i) => (
      <Div pa3>
        <Div key={`${i}-detail`}>taskDetails: {task.taskDetails}</Div>
        <Div key={`${i}-summary`}>taskSummary: {task.taskSummary}</Div>
        <Div key={`${i}-contact`}>
          contact: {task.contact.name} {task.contact.email}{' '}
          {task.contact.mobilePhone}
        </Div>
      </Div>
    ))}
  </Div>
);

const mapStateToProps = state => ({
  tasksList: state.tasksList,
});

export const TasksList = connect(mapStateToProps)(TasksListComponent);
