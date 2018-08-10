import React from 'react';
import { connect } from 'react-redux';

import { toggleShout } from '../redux/actions';

const ShoutComponent = props => (
  <div>
    <button onClick={props.toggleShout}>
      {props.shouting ? `Shhh!` : `SHOUT!`}
    </button>
    {props.shouting && <div>AAAAHHHHHH!!!</div>}
  </div>
);

export const Shout = connect(
  state => ({ shouting: state.shout.shouting }),
  { toggleShout }
)(ShoutComponent);
