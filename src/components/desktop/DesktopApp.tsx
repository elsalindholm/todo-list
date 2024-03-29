import React from 'react';

import { ListOfLists } from './ListOfLists';
import { AppState } from '../../state/AppState';
import { TodoList } from './todoList/TodoList';

import './desktop-app.scss';

interface DesktopAppProps {
  appState: AppState;
}

export class DesktopApp extends React.PureComponent<DesktopAppProps> {
  render() {
    const { appState } = this.props;

    return (
      <div className={'desktop-app'}>
        <div className={'page-container'}>
          <ListOfLists appState={appState} createList={() => appState.createList()} />
          <TodoList appState={appState} />
        </div>
      </div>
    );
  }
}
