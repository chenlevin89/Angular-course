import {Component, OnInit, Input} from '@angular/core';
import {TodoItem} from '../../entities/todo-item';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.scss']
})
export class TodoListComponent implements OnInit {

  @Input() list: TodoItem[];

  todoActionName = '';

  constructor() {}

  ngOnInit() {
  }

  add() {
    if (this.todoActionName) {
      this.list.push({id: this.list.length, title: this.todoActionName});
      this.todoActionName = '';
    }
  }

}
