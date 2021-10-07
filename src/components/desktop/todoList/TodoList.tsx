import { observer } from 'mobx-react';
import React from 'react';
import { AppState } from '../../../state/AppState';
import { ListHeader } from './ListHeader';
import { ListItemDisplay } from './ListItemDisplay';

import './todo-list.scss';

interface TodoListProps {
  appState: AppState;
}

@observer
export class TodoList extends React.PureComponent<TodoListProps> {
  render() {
    const { appState } = this.props;

    let content: JSX.Element;
    if (appState.selectedList) {
      content = (
        <>
          <div className={'todo-header'}>
            <ListHeader appState={appState} />
          </div>
          <div className={'todo-items'}></div>
        </>
      );
    } else {
      content = <>No list selected</>;
    }

    return <div className={'todo-list'}>{content}</div>;
  }
}
