import { Injectable } from '@angular/core';
import {Resolve, RouterStateSnapshot, ActivatedRouteSnapshot} from '@angular/router';
import {Observable, timer} from 'rxjs';
import {TodoListService} from '../../services/todo-list.service';
import {TodoItem} from '../../entities/todo-item';
import {mapTo} from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ActionsResolverService implements Resolve<TodoItem[]> {

  constructor(private todoListService: TodoListService) { }

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot):  Observable<TodoItem[]> {
    const todoList = this.todoListService.getTodoListData();
    return timer(1000).pipe(mapTo(todoList));
  }

}
