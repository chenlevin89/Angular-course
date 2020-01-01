import { Component, OnInit } from '@angular/core';
import {TodoItem} from '../../entities/todo-item';
import {TodoListService} from '../../services/todo-list.service';
import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-actions',
  templateUrl: './actions.component.html',
  styleUrls: ['./actions.component.scss']
})
export class ActionsComponent implements OnInit {

  todoList: TodoItem[];
  userName: string;

  constructor(private todoListService: TodoListService, private route: ActivatedRoute) {}

  ngOnInit() {
    this.todoList = this.todoListService.getTodoListData();
  }

  addItem(item: TodoItem): void {
    this.todoList = [...this.todoList, item]; // Immutable
  }
}
