import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import {TodoItem} from '../../entities/todo-item';
import {TodoListService} from '../../services/todo-list.service';
import {ActivatedRoute} from '@angular/router';
import {FormControl, Validators} from '@angular/forms';

@Component({
  selector: 'app-actions',
  templateUrl: './actions.component.html',
  styleUrls: ['./actions.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ActionsComponent implements OnInit {

  todoList: TodoItem[];
  userName: string;
  selectedActions = new FormControl(null, Validators.required);

  constructor(private todoListService: TodoListService, private route: ActivatedRoute) {}

  ngOnInit() {
    this.todoList = this.todoListService.getTodoListData();

    this.selectedActions.setValue(this.todoListService.getSelectedActions());

    this.selectedActions.valueChanges.subscribe(value => {
      this.todoListService.updateSelectedActions(value);
    });
  }

  addItem(item: TodoItem): void {
    this.todoList = [...this.todoList, item]; // Immutable
  }

  onClick(){
    const item = {id:10, title: 'new task'};
     this.todoList = [...this.todoList, item]
    // this.todoList.push(item);
  }

}
