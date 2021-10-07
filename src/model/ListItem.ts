import { action, observable } from 'mobx';

export class ListItem {
  public id: string;
  @observable public text: string;
  public completed: boolean = false;

  constructor(id: string, text: string) {
    this.id = id;
    this.text = text;
  }

  @action setListItemText(text: string) {
    this.text = text;
  }
}
