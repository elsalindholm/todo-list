import { observer } from 'mobx-react';
import React from 'react';

import './todo-list.scss';

@observer
export class ToDoList extends React.PureComponent {
  render() {
    return <div className={'todo-list'}></div>;
  }
}
