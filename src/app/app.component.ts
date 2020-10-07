import {Component, OnInit, ViewChild} from '@angular/core';
import {TodoItem} from './entities/todo-item';
import {TodoListService} from './services/todo-list.service';
import {Widget} from './entities/widget';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {

  todoList: TodoItem[];
  widget: Widget;

  constructor(private todoListService: TodoListService) {}

  ngOnInit() {
    this.todoList = this.todoListService.getTodoListData();
    this.widget = {text: 'Selected', payload: 0};
  }

  addItem(item: TodoItem): void {
    this.todoList = [...this.todoList, item]; // Immutable
  }

  checkedChanged(value: number){
    this.widget = {
      ...this.widget,
      payload: this.widget.payload + value
    };
  }

}
