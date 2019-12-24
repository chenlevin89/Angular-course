import {Component} from '@angular/core';
import {TodoItem} from './entities/todo-item';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  todoList: TodoItem[] = [
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
