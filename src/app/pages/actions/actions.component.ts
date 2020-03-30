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

  constructor(private route: ActivatedRoute) {}

  ngOnInit() {
    this.todoList = this.route.snapshot.data.todoList;
  }

  addItem(item: TodoItem): void {
    this.todoList = [...this.todoList, item];
  }
}
