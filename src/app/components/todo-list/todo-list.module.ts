import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {TodoListComponent} from './todo-list.component';
import {TooltipModule} from '../../directives/tooltip/tooltip.module';


@NgModule({
  declarations: [TodoListComponent],
  exports: [TodoListComponent],
  imports: [
    CommonModule,
    TooltipModule
  ]
})
export class TodoListModule { }
