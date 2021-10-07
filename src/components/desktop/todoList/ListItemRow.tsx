import React from 'react';
import { AppState } from '../../../state/AppState';

interface ListItemRowProps {
  appState: AppState;
}

export class ListItemRow extends React.PureComponent<ListItemRowProps> {
  render() {
    return (
      <div>
        <div>Tick</div>
        <input type={'text'} id={'list-item'} name={'list-item'}></input>
        <button>Delete</button>
      </div>
    );
  }
}
