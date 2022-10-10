import { Component, ElementRef, Input, OnInit, ViewChild } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { Todo } from '../models/todo';

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

  constructor() {

  }

  ngOnInit(): void {
    this.chkCompleted = new FormControl(this.todo.isCompleted);
    this.txtEdit = new FormControl(this.todo.text, Validators.required);
    //this.todo.isCompleted = true;
  }

  edit(): void {
    this.editing = true;
    setTimeout(() => {
      this.inputEdit.nativeElement.select();
    }, 1);
  }

  endEdit() {
    this.editing = false;
  }

}
