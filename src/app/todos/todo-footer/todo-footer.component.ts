import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { AppState } from 'src/app/app.reducer';
import * as filterActions from 'src/app/filter/filter.actions';
import * as todoActions from '../todo.actions';

@Component({
  selector: 'app-todo-footer',
  templateUrl: './todo-footer.component.html',
  styleUrls: ['./todo-footer.component.css']
})
export class TodoFooterComponent implements OnInit {

  currentFilter: filterActions.validFilters = 'todas';
  filters: filterActions.validFilters[] = ['todas', 'completadas', 'pendientes'];
  pendingTodos: number = 0;


  constructor(private store: Store<AppState>) { }

  ngOnInit(): void {
    // this.store.select('filter').subscribe(filter => this.currentFilter = filter);

    this.store.subscribe(state => {
      this.currentFilter = state.filter;
      this.pendingTodos = state.todos.filter(todo => !todo.isCompleted).length
    });
  }

  onFilterChanged(filter: filterActions.validFilters) {
    this.store.dispatch(filterActions.setFilter({ filter }));
  }

  cleanCompleted() {
    this.store.dispatch(todoActions.cleanCompleted());
  }
}
