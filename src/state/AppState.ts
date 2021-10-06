import { action, observable } from 'mobx';
import { List } from '../model/List';

export class AppState {
  @observable public listMap = new Map<string, List>();
  @observable public lists: List[] = [];
  @observable public selectedList: List;

  @action createList() {
    let listId = this.createRandomId();
    let listName = 'List';

    const newList = new List(listId, listName);
    this.listMap.set(newList.id, newList);
    this.lists.push(newList);

    console.log(this.listMap);
  }

  @action createRandomId() {
    let charsForId = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    let lengthOfId = 6;
    let randomId: string[] = [];

    for (let i = 0; i < lengthOfId; i++) {
      let index = Math.floor(Math.random() * (charsForId.length - 1));
      randomId.push(charsForId[index]);
    }
    console.log(randomId);
    return randomId.join('');
  }
}
