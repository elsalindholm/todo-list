import { observer } from 'mobx-react';
import React from 'react';

import { ListItem } from '../../../model/ListItem';

interface ListItemRowProps {
  listItem: ListItem;
}

@observer
export class ListItemRow extends React.PureComponent<ListItemRowProps> {
  render() {
    const { listItem } = this.props;

    return (
      <div>
        <div>Tick</div>
        <input
          type={'text'}
          id={'list-item'}
          name={'list-item'}
          value={listItem.text}
          onChange={(event: React.ChangeEvent<HTMLInputElement>) =>
            listItem.setListItemText(event.target.value)
          }
        ></input>
        <button>Delete</button>
      </div>
    );
  }
}
