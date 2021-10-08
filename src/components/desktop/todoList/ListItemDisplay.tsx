import { observer } from 'mobx-react';
import React from 'react';
import { AppState } from '../../../state/AppState';
import { ListItemRow } from './ListItemRow';

interface ListItemDisplayProps {
  appState: AppState;
}

@observer
export class ListItemDisplay extends React.PureComponent<ListItemDisplayProps> {
  render() {
    const { appState } = this.props;

    return (
      <div>
        <button onClick={() => appState.selectedList.addListItem()}>+ Add task</button>
        <div>{this.renderToDoListItems()}</div>
      </div>
    );
  }

  private renderToDoListItems() {
    const { appState } = this.props;

    let listItems: JSX.Element[] = [];

    appState.selectedList.listItems.forEach((listItem) => {
      listItems.push(<ListItemRow appState={appState} listItem={listItem} />);
    });
    return listItems;
  }
}
