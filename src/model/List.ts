import { action, observable } from 'mobx';
import { RandomUtils } from '../utils/RandomUtils';

import { ListItem } from './ListItem';

export class List {
  public id: string;
  @observable public name: string;
  @observable public listItems: ListItem[] = [];

  constructor(id: string, name: string) {
    this.id = id;
    this.name = name;
  }

  @action public setName(newName: string) {
    this.name = newName;
  }

  @action addListItem() {
    let id = RandomUtils.createRandomId();

    const newListItem = new ListItem(id, '');

    this.listItems.push(newListItem);
  }
}
