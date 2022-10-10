import { createAction, props } from "@ngrx/store";

export const add = createAction(
  '[Todo Add component] Add Todo',
  props<{ text: string}>()
);

export const toggle = createAction(
  '[Todo Item component] Toggle Todo',
  props<{ id: number}>()
);
