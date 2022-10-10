import { createReducer, on } from '@ngrx/store';
import { Todo } from './models/todo';
import { add, toggle } from './todo.actions';

export const initialState: Todo[] = [
  new Todo('Tomar vaso de agua'),
  new Todo('Tender cama'),
  new Todo('Reunión 10am')];

export const todoReducer = createReducer(
  initialState,
  on(add, (state, { text }) => [...state, new Todo(text)]),
  on(toggle, (state, { id }) => {
    return state.map(todo => {
        return {
          ...todo,
          isCompleted:  todo.id === id ? !todo.isCompleted : todo.isCompleted
        }
    })
  })
);
