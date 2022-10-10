import { createReducer, on } from '@ngrx/store';
import { Todo } from './models/todo';
import { add, cleanCompleted, edit, remove, toggle, toggleAll } from './todo.actions';

export const initialState: Todo[] = [
  new Todo('Tomar vaso de agua'),
  new Todo('Tender cama'),
  new Todo('Reunión 10am')];

export const todoReducer = createReducer(
  initialState,
  on(add, (state, { text }) => [...state, new Todo(text)]),
  on(remove, (state, { id }) => state.filter(todo => todo.id !== id)),
  on(cleanCompleted, (state) => state.filter(todo => !todo.isCompleted)),
  on(toggle, (state, { id }) => {
    return state.map(todo => {
        return {
          ...todo,
          isCompleted:  todo.id === id ? !todo.isCompleted : todo.isCompleted
        }
    })
  }),
  on(edit, (state, { id, text }) => {
    return state.map(todo => {
        return {
          ...todo,
          text:  todo.id === id ? text : todo.text
        }
    })
  }),
  on(toggleAll, (state, { completed }) => {
    return state.map(todo => {
        return {
          ...todo,
          isCompleted: completed
        }
    })
  })
);
