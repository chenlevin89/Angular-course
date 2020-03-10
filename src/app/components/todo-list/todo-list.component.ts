import {Component, OnInit} from '@angular/core';
import {TodoItem} from '../../entities/todo-item';
import {TodoListService} from '../../services/todo-list.service';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.scss']
})
export class TodoListComponent implements OnInit {

  list: TodoItem[];

  todoActionName = '';

  constructor(private todoListService: TodoListService) {}

  ngOnInit() {
    this.list = this.todoListService.getTodoListData();
  }

  // Todo
  add() {
    // if (this.todoActionName) {
    //   this.list.push({id: this.list.length, title: this.todoActionName});
    //   this.todoActionName = '';
    // }
  }

}
