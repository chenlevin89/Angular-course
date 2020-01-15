import {Injectable} from '@angular/core';
import {TodoItem} from '../entities/todo-item';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {mapTo} from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class TodoListService {

  constructor(private httpClient: HttpClient) {}

  // getTodoListData(): Observable<TodoItem[]> {
  //   return this.httpClient.get("https://jsonplaceholder.typicode.com/posts").pipe(
  //     mapTo([
  //       {
  //         id: 0,
  //         title: 'Angular basic'
  //       },
  //       {
  //         id: 1,
  //         title: 'Building blocks',
  //       },
  //       {
  //         id: 2,
  //         title: 'Components communication'
  //       },
  //       {
  //         id: 3,
  //         title: 'Performance and best practices'
  //       }
  //     ])
  //   );
  // }

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

  getSelectedActions() {
    const selected = localStorage.getItem('selectedActions');
    return selected ? JSON.parse(selected) : null;
  }

  updateSelectedActions(selection: number[]): void {
    localStorage.setItem('selectedActions', JSON.stringify(selection));
  }
}
