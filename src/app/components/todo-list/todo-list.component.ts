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

  private counter = 0;

  constructor(private todoListService: TodoListService) {}

  ngOnInit() {
    this.list = this.todoListService.getTodoListData();
  }

  add() {
    this.counter ++;
    this.list.push({id: this.list.length, title: `New action ${this.counter}`});
  }

}
