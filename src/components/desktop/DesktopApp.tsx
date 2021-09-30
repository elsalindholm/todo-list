import React from 'react';
import { HeaderDesktop } from './HeaderDesktop';

import './desktop-app.scss';

export class DesktopApp extends React.PureComponent {
  render() {
    return (
      <div className={'desktop-app'}>
        <div className={'header'}>
          <HeaderDesktop />
        </div>
      </div>
    );
  }
}
