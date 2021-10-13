import { observer } from 'mobx-react';
import React from 'react';

import { ListItem } from '../../../model/ListItem';
import { AppState } from '../../../state/AppState';

import './list-item-row.scss';

interface ListItemRowProps {
  appState: AppState;
  listItem: ListItem;
}

@observer
export class ListItemRow extends React.PureComponent<ListItemRowProps> {
  render() {
    const { appState, listItem } = this.props;

    let checked = listItem.completed;

    return (
      <div className={'list-item-row'}>
        <div className={'tick-box'}>
          <input
            className={'tick-box-input'}
            type={'checkbox'}
            onChange={() => appState.tickListItem(listItem)}
            checked={checked}
          ></input>
        </div>
        <input
          type={'text'}
          id={'list-item'}
          className={'list-item-text'}
          name={'list-item'}
          value={listItem.text}
          onChange={(event: React.ChangeEvent<HTMLInputElement>) =>
            listItem.setListItemText(event.target.value)
          }
        ></input>
        <button
          className={'delete-list-item-button'}
          onClick={() => appState.selectedList.deleteListItem(listItem)}
        >
          -
        </button>
      </div>
    );
  }
}
