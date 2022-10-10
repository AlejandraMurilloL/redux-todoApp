import { Pipe, PipeTransform } from '@angular/core';
import { validFilters } from '../filter/filter.actions';
import { Todo } from './models/todo';

@Pipe({
  name: 'filterTodo'
})
export class FilterPipe implements PipeTransform {

  transform(allTodos: Todo[], filter: validFilters) {
    switch (filter) {
      case 'completadas':
        return allTodos.filter(todo => todo.isCompleted);
      case 'pendientes':
        return allTodos.filter(todo => !todo.isCompleted);
      default:
        return allTodos;
    }
  }

}
