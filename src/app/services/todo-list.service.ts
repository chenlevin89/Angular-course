import {Injectable} from '@angular/core';
import {TodoItem} from '../entities/todo-item';

@Injectable({
  providedIn: 'root'
})
export class TodoListService {

  observers = {};

  constructor() {}

  getTodoListData(): TodoItem[] {
    return [
      {
        id: 0,
        title: 'Angular basic'
      },
      {
        id: 1,
        title: 'Building blocks',
      },
      {
        id: 2,
        title: 'Components communication'
      },
      {
        id: 3,
        title: 'Performance and best practices'
      }
    ];
  }

  registerFunc({key, func}: {key: string, func: Function}): void {
    this.observers[key] = func;
  }

  invokeCallbacks(key: string): void {
    if(typeof this.observers[key] === 'function'){
      this.observers[key]();
    }
  }
}
