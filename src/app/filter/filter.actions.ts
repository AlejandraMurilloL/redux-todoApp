import { createAction, props } from "@ngrx/store";

export type validFilters = 'todas' | 'completadas' | 'pendientes';

export const setFilter = createAction(
  '[Todo-Footer Component] Set Filter',
  props<{filter: validFilters}>()
);
