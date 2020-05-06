import { Injectable } from '@angular/core';
import {Resolve, RouterStateSnapshot, ActivatedRouteSnapshot} from '@angular/router';
import {Observable} from 'rxjs';
import {TodoListService} from '../../services/todo-list.service';

const DATA = {
  name: 'TestUser'
}

@Injectable({
  providedIn: 'root'
})
export class ActionsResolverService implements Resolve<any> {

  constructor(private todoListService: TodoListService) { }

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot):  Observable<any> | Promise<any> | any {
    return this.todoListService.getTodoListData();
  }
}
