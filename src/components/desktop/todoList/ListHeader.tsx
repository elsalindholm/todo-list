import React from 'react';

import { AppState } from '../../../state/AppState';

import './list-header.scss';

interface ListHeaderProps {
  appState: AppState;
}

export class ListHeader extends React.PureComponent<ListHeaderProps> {
  render() {
    const { appState } = this.props;

    return (
      <div className={'list-header'}>
        <div className={'list-name-input'}>
          <input
            type={'text'}
            id={'list-name'}
            name={'list-name'}
            value={appState.selectedList.name}
          ></input>
        </div>
        <button className={'delete-list-button'}>Delete list</button>
      </div>
    );
  }
}
