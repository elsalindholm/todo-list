import React from 'react';
import { HeaderDesktop } from './HeaderDesktop';

import { ListOfLists } from './ListOfLists';
import { AppState } from '../../state/AppState';

import './desktop-app.scss';

interface DesktopAppProps {
  appState: AppState;
}

export class DesktopApp extends React.PureComponent<DesktopAppProps> {
  render() {
    const { appState } = this.props;

    return (
      <div className={'desktop-app'}>
        <div className={'header'}>
          <HeaderDesktop />
        </div>
        <div className={'page-container'}>
          <div>My lists</div>
          <ListOfLists appState={appState} createList={() => appState.createList()} />
        </div>
      </div>
    );
  }
}
