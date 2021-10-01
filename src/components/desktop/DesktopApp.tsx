import React from 'react';
import { HeaderDesktop } from './HeaderDesktop';

import './desktop-app.scss';
import { ListOfLists } from './ListOfLists';

export class DesktopApp extends React.PureComponent {
  render() {
    return (
      <div className={'desktop-app'}>
        <div className={'header'}>
          <HeaderDesktop />
        </div>
        <div className={'page-container'}>
          <div>My lists</div>
          <ListOfLists />
        </div>
      </div>
    );
  }
}
