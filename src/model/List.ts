import { action, observable } from 'mobx';
import { RandomUtils } from '../utils/RandomUtils';

import { ListItem } from './ListItem';

export class List {
  public id: string;
  @observable public name: string;
  public listItems: ListItem[] = [];

  constructor(id: string, name: string) {
    this.id = id;
    this.name = name;
  }

  @action public setName(newName: string) {
    this.name = newName;
  }

  @action addListItem() {
    const newListItem: ListItem = {
      id: RandomUtils.createRandomId(),
      text: '',
      completed: false,
    };
    this.listItems.push(newListItem);
  }
}
