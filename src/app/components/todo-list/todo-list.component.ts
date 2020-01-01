import {Component, OnInit} from '@angular/core';
import {TodoItem} from '../../entities/todo-item';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.scss']
})
export class TodoListComponent implements OnInit {

  list: TodoItem[] = [
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

  private counter = 0;

  constructor() {}

  ngOnInit() {
  }

  add() {
    this.counter ++;
    this.list.push({id: this.list.length, title: `New action ${this.counter}`});
  }

}
