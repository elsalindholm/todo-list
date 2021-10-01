import { ListItem } from './ListItem';

export class List {
  public id: string;
  public name: string;
  public listItems?: ListItem[] = [];

  constructor(id: string, name: string) {
    this.id = id;
    this.name = name;
  }
}
