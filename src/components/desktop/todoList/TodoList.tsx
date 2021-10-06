import { observer } from 'mobx-react';
import React from 'react';
import { AppState } from '../../../state/AppState';
import { ListHeader } from './ListHeader';

import './todo-list.scss';

interface TodoListProps {
  appState: AppState;
}

@observer
export class TodoList extends React.PureComponent<TodoListProps> {
  render() {
    const { appState } = this.props;

    return (
      <div className={'todo-list'}>
        <ListHeader appState={appState} />
      </div>
    );
  }
}
