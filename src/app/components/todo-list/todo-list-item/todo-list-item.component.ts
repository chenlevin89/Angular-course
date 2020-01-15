import { Component, OnInit, Input, Output, EventEmitter, ChangeDetectionStrategy } from '@angular/core';
import {TodoItem} from '../../../entities/todo-item';

@Component({
  selector: 'app-todo-list-item',
  templateUrl: './todo-list-item.component.html',
  styleUrls: ['./todo-list-item.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class TodoListItemComponent implements OnInit {

  @Input() item: TodoItem;
  @Input() isChecked: boolean;

  @Output() checked = new EventEmitter<{event: any, id: number}>();

  constructor() { }

  ngOnInit() {
  }

  onChecked(event: any){
    this.checked.emit({event, id: this.item.id});
  }

  getTitle(){
    console.log(this.item);
    return this.item.title;
  }

}
