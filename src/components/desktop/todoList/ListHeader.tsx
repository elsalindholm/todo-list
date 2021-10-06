import React from 'react';
import { AppState } from '../../../state/AppState';

interface ListHeaderProps {
  appState: AppState;
}

export class ListHeader extends React.PureComponent<ListHeaderProps> {
  render() {
    const { appState } = this.props;

    return (
      <div>
        <div>
          <input
            type={'text'}
            id={'list-name'}
            name={'list-name'}
            value={appState.selectedList.name}
          ></input>
        </div>
        <button>Delete list</button>
      </div>
    );
  }
}
