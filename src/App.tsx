import { observer } from 'mobx-react';
import React from 'react';

import { AppState } from './state/AppState';
import { DesktopApp } from './components/desktop/DesktopApp';

@observer
export class App extends React.PureComponent {
  private readonly appState = new AppState();
  public render() {
    return <DesktopApp appState={this.appState} />;
  }
}
