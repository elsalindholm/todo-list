export class ListItem {
  public id: string;
  public text: string;
  public completed: boolean = false;

  constructor(id: string, text: string) {
    this.id = id;
    this.text = text;
  }
}
