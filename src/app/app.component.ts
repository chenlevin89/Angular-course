import {Component, OnInit} from '@angular/core';
import {TodoItem} from './entities/todo-item';
import {TodoListService} from './services/todo-list.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {

  todoList: TodoItem[];

  constructor(private todoListService: TodoListService) {}

  ngOnInit() {
    this.todoList = this.todoListService.getTodoListData();
  }

}
