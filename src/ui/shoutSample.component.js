import React from 'react';
import { connect } from 'react-redux';
import { createSelector, createStructuredSelector } from 'reselect';

import { toggleShout } from '../core/actions';

const ShoutComponent = props => (
  <div>
    <button onClick={props.toggleShout}>
      {props.shouting ? `Shhh!` : `SHOUT!`}
    </button>
    {props.shouting && <div>AAAAHHHHHH!!!</div>}
  </div>
);

const selectShouting = state => state.shout.shouting;

const mapStateToProps = createStructuredSelector({
  shouting: createSelector(selectShouting, shouting => shouting)
});

export const ShoutSample = connect(
  mapStateToProps,
  { toggleShout }
)(ShoutComponent);
