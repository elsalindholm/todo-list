import { action, observable } from 'mobx';

import { List } from '../model/List';
import { ListItem } from '../model/ListItem';
import { RandomUtils } from '../utils/RandomUtils';

export class AppState {
  @observable public lists: List[] = [];
  @observable public selectedList: List;

  @action createList() {
    let listId = RandomUtils.createRandomId();
    let listName = 'List';

    const newList = new List(listId, listName);

    this.lists.push(newList);

    this.selectedList = newList;
  }

  @action setListName(list: List, newName: string) {
    list.setName(newName);
  }

  @action selectList(list: List) {
    this.selectedList = list;
  }

  @action deleteList(list: List) {
    let index = this.lists.indexOf(list);

    this.lists.splice(index, 1);
    this.selectedList = undefined;
  }

  @action tickListItem(listItem: ListItem) {
    listItem.completed = !listItem.completed;
  }
}
