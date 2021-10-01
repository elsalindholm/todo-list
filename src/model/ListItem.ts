export class ListItem {
  public id: string;
  public text: string;
  public completed: boolean = false;

  constructor(id: string, text: string, completed: boolean) {
    this.id = id;
    this.text = text;
    this.completed = false;
  }
}
