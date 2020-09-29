import {Component, OnInit} from '@angular/core';
import {TodoItem} from '../../entities/todo-item';
import {TodoListService} from '../../services/todo-list.service';

const ENTER_KEY_CODE = 13;

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.scss']
})
export class TodoListComponent implements OnInit {

  list: TodoItem[];

  todoActionName = '';
  showErrorMessage = false;

  constructor(private todoListService: TodoListService) {}

  ngOnInit() {
    this.list = this.todoListService.getTodoListData();
  }

  add(): void {
    if (!this.todoActionName) {
      return;
    }
    if (this.list.some(item => item.title.toLowerCase() === this.todoActionName.toLowerCase())) {
      this.showErrorMessage = true;
    } else {
      this.list.push({id: this.list.length, title: this.todoActionName});
      this.todoActionName = '';
    }
  }

  onKeyDown($event): void {
    this.showErrorMessage = false;
    if ($event.keyCode === ENTER_KEY_CODE) {
      this.add();
    }
  }

}
