export class Todo {
  id: number;
  text: string;
  isCompleted: boolean;

  constructor(text: string) {
    this.id = new Date().getTime();
    this.text = text;
    this.isCompleted = false;
  }
}
