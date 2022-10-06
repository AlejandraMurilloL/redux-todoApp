import { createReducer, on } from '@ngrx/store';
import { Todo } from './models/todo';
import { add } from './todo.actions';

export const initialState: Todo[] = [ new Todo('Tomar vaso de agua')];

export const todoReducer = createReducer(
  initialState,
  on(add, (state, { text }) => [...state, new Todo(text)]),
);
