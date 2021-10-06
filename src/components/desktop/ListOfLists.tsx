import { observer } from 'mobx-react';
import React from 'react';

import { List } from '../../model/List';
import { AppState } from '../../state/AppState';

import './list-of-lists.scss';

interface ListOfListsProps {
  appState: AppState;
  createList: () => void;
}

@observer
export class ListOfLists extends React.PureComponent<ListOfListsProps> {
  render() {
    const { appState, createList } = this.props;
    return (
      <div className={'list-of-lists'}>
        <div className={'list-container'}>
          {appState.lists.map((list) => this.renderList(list))}
        </div>
        <button className={'add-list-button'} onClick={() => createList()}>
          + new list
        </button>
      </div>
    );
  }

  private renderList(list: List) {
    return <button className={'list-nav-button'}>{list.name}</button>;
  }
}
