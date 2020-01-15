import {Component, OnInit, Input, Output, EventEmitter, forwardRef, ChangeDetectionStrategy} from '@angular/core';
import {TodoItem} from '../../entities/todo-item';
import {FormControl, ControlValueAccessor, NG_VALUE_ACCESSOR} from '@angular/forms';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.scss'],
  providers: [
    {provide: NG_VALUE_ACCESSOR, multi: true, useExisting: forwardRef(() => TodoListComponent)}
  ],
  changeDetection: ChangeDetectionStrategy.OnPush
})
 export class TodoListComponent implements ControlValueAccessor {

  @Input() list: TodoItem[];
  @Output() addItem = new EventEmitter<TodoItem>();

  selection: FormControl = new FormControl({});
  todoActionName = '';

  constructor() {}

  add(): void {
    if (this.todoActionName) {
      const addedItem: TodoItem = {id: this.list.length, title: this.todoActionName};
      this.addItem.emit(addedItem);
      this.todoActionName = '';
    }
  }

  onChecked(event: any, id: number) {
    const currentSelection = this.selection.value;
    const checked = event.target.checked;
    if (checked) {
      currentSelection[id] = true;
    } else {
      delete currentSelection[id];
    }
    this.selection.setValue(currentSelection);
  }

  getTitle(item: TodoItem){
    console.log(item);
    return item.title;
  }

  writeValue(obj: any): void {
    const selection = obj && Array.isArray(obj) ?
      obj.reduce((acc, curr) => {
        acc[curr] = true;
        return acc;
      }, {}): {};
    this.selection.setValue(selection);
  }

  registerOnChange(fn: any): void {
   this.selection.valueChanges.subscribe(value => {
     fn(Object.keys(value))
   });
  }

  registerOnTouched(fn: any): void {}

}
