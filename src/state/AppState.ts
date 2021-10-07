import { action, observable } from 'mobx';

import { List } from '../model/List';
import { RandomUtils } from '../utils/RandomUtils';

export class AppState {
  @observable public listMap = new Map<string, List>();
  @observable public lists: List[] = [];
  @observable public selectedList: List;

  @action createList() {
    let listId = RandomUtils.createRandomId();
    let listName = 'List';

    const newList = new List(listId, listName);
    this.listMap.set(newList.id, newList);
    this.lists.push(newList);

    console.log(this.listMap);
  }

  @action setListName(list: List, newName: string) {}

  @action selectList(list: List) {
    this.selectedList = list;
  }
}
