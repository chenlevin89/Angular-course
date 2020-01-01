import {Component, OnInit, Input, Output, EventEmitter} from '@angular/core';
import {TodoItem} from '../../entities/todo-item';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.scss']
})
export class TodoListComponent implements OnInit {

  @Input() list: TodoItem[];
  @Output() addItem = new EventEmitter<TodoItem>();

  todoActionName = '';

  constructor() {}

  add(): void {
    if (this.todoActionName) {
      const addedItem: TodoItem = {id: this.list.length, title: this.todoActionName};
      this.addItem.emit(addedItem);
      this.todoActionName = '';
    }
  }

  ngOnInit() {

  }

}
