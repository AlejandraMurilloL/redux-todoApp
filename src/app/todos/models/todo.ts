export class Todo {
  id: number;
  text: string;
  isCompleted: boolean;

  constructor(text: string) {
    this.id = Math.random();
    this.text = text;
    this.isCompleted = false;
  }
}
