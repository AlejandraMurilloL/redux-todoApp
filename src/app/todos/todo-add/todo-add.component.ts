import { Component, OnInit } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { Store } from '@ngrx/store';
import { AppState } from 'src/app/app.reducer';
import * as actions from '../todo.actions';

@Component({
  selector: 'app-todo-add',
  templateUrl: './todo-add.component.html',
  styleUrls: ['./todo-add.component.css']
})
export class TodoAddComponent implements OnInit {

  inputTodo: FormControl;

  constructor(private store: Store<AppState>) {
    this.inputTodo = new FormControl('', Validators.required);
  }

  ngOnInit(): void {
  }

  add() {
    if (this.inputTodo.invalid) { return; }
    this.store.dispatch(actions.add({ text: this.inputTodo.value }));
    this.inputTodo.reset();
  }
}
