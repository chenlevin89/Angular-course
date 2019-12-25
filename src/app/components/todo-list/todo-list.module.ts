import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {TodoListComponent} from './todo-list.component';
import {TooltipModule} from '../../directives/tooltip/tooltip.module';
import {FormsModule} from '@angular/forms';


@NgModule({
  declarations: [TodoListComponent],
  exports: [TodoListComponent],
  imports: [
    CommonModule,
    TooltipModule,
    FormsModule
  ]
})
export class TodoListModule { }
