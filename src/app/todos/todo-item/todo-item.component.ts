import { Component, ElementRef, Input, OnInit, ViewChild } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { Store } from '@ngrx/store';
import { AppState } from 'src/app/app.reducer';
import { Todo } from '../models/todo';
import * as actions from '../todo.actions';

@Component({
  selector: 'app-todo-item',
  templateUrl: './todo-item.component.html',
  styleUrls: ['./todo-item.component.css']
})
export class TodoItemComponent implements OnInit {

  @Input() todo!: Todo;
  @ViewChild('inputEdit') inputEdit!: ElementRef;

  chkCompleted!: FormControl;
  txtEdit!: FormControl;
  editing: boolean = false;

  constructor(private store: Store<AppState>) {

  }

  ngOnInit(): void {
    this.chkCompleted = new FormControl(this.todo.isCompleted);
    this.txtEdit = new FormControl(this.todo.text, Validators.required);

    this.chkCompleted.valueChanges.subscribe(value => {
      this.store.dispatch(actions.toggle({id: this.todo.id}))
    });
    //this.todo.isCompleted = true;
  }

  edit(): void {
    this.editing = true;
    this.txtEdit.setValue(this.todo.text);

    setTimeout(() => {
      this.inputEdit.nativeElement.select();
    }, 1);
  }

  endEdit() {
    this.editing = false;

    if (this.txtEdit.invalid) return;
    if (this.txtEdit.value === this.todo.text) return;

    this.store.dispatch(actions.edit({id: this.todo.id, text: this.txtEdit.value}));
  }
}
