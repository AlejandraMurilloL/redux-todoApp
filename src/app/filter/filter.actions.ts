import { createAction, props } from "@ngrx/store";

export type validFilters = 'todas' | 'completadas' | 'pendientes';

export const setFilter = createAction(
  '[Filter] Set Filter',
  props<{filter: validFilters}>()
);
