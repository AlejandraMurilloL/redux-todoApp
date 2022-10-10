import { createAction, props } from "@ngrx/store";

export type validFilters = 'todos' | 'completados' | 'pendientes';

export const setFilter = createAction(
  '[Filter] Set Filter',
  props<{filter: validFilters}>()
);
