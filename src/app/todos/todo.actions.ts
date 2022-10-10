import { createAction, props } from "@ngrx/store";

export const add = createAction(
  '[Todo Add component] Add Todo',
  props<{ text: string}>()
);

export const toggle = createAction(
  '[Todo Item component] Toggle Todo',
  props<{ id: number}>()
);

export const edit = createAction(
  '[Todo Item component] Edit Todo',
  props<{ id: number, text: string }>()
);

export const remove = createAction(
  '[Todo Item component] Delete Todo',
  props<{ id: number}>()
);

export const toggleAll = createAction(
  '[Todo Page component] Toggle All Todos',
  props<{ completed: boolean}>()
);
