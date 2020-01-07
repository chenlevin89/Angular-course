import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActionsComponent } from './actions.component';
import {Routes, RouterModule} from '@angular/router';
import {TodoListModule} from '../../components/todo-list/todo-list.module';
import {ReactiveFormsModule} from '@angular/forms';

export const routes: Routes = [
  {
    path: '',
    component: ActionsComponent,
  }
]

@NgModule({
  declarations: [ActionsComponent],
  imports: [
    CommonModule,
    TodoListModule,
    RouterModule.forChild(routes),
    ReactiveFormsModule
  ]
})
export class ActionsModule { }
