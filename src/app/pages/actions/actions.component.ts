import { Component, OnInit } from '@angular/core';
import {TodoItem} from '../../entities/todo-item';
import {ActivatedRoute} from '@angular/router';
import {TodoListService} from '../../services/todo-list.service';

@Component({
  selector: 'app-actions',
  templateUrl: './actions.component.html',
  styleUrls: ['./actions.component.scss']
})
export class ActionsComponent implements OnInit {

  todoList: TodoItem[];

  constructor(private route: ActivatedRoute,
              private todoListService: TodoListService) {}

  ngOnInit() {
    // this.todoList = this.route.snapshot.data.todoList;
    this.todoList = this.todoListService.getTodoListData();
  }

  addItem(item: TodoItem): void {
    this.todoList = [...this.todoList, item];
  }
}
