import {Component, OnInit, ViewChild} from '@angular/core';
import {TodoItem} from './entities/todo-item';
import {TodoListService} from './services/todo-list.service';
import {TodoListComponent} from './components/todo-list/todo-list.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {

  @ViewChild('todoListComponent', {static: false}) todoListComponent: TodoListComponent;

  todoList: TodoItem[];

  constructor(private todoListService: TodoListService) {}

  ngOnInit() {
    this.todoList = this.todoListService.getTodoListData();
  }

  addItem(item: TodoItem): void {
    this.todoList = [...this.todoList, item]; // Immutable
  }

  printValue(){
    console.log(this.todoListComponent.todoActionName);
  }

}
