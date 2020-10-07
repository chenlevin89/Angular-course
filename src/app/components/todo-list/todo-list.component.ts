import {Component, OnInit, Input, OnDestroy, AfterViewInit, OnChanges, Output, EventEmitter, SimpleChanges} from '@angular/core';
import {TodoItem} from '../../entities/todo-item';
import {TodoListService} from '../../services/todo-list.service';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.scss']
})
export class TodoListComponent implements OnInit, OnDestroy, AfterViewInit, OnChanges {

  @Input() list: TodoItem[];
  @Output() addItem = new EventEmitter<TodoItem>();
  @Output() checkedChanged = new EventEmitter<number>();

  todoActionName = '';

  constructor() {}

  add(): void {
    if (this.todoActionName) {
      const addedItem: TodoItem = {id: this.list.length, title: this.todoActionName};
      this.addItem.emit(addedItem);
      this.todoActionName = '';
    }
  }

  checkboxChanged(val) {
    this.checkedChanged.emit(val ? 1 : -1);
  }

  ngOnChanges(changes: SimpleChanges): void {
    console.log(changes);
  }

  ngOnInit() {
    console.log('Component Initialize');
  }

  ngAfterViewInit() {
    console.log('Component view have been rendered');
  }

  ngOnDestroy() {
    console.log('Component destroy');
  }

}
