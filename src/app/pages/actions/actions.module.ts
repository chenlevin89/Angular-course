import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActionsComponent } from './actions.component';
import {Routes, RouterModule} from '@angular/router';
import {TodoListModule} from '../../components/todo-list/todo-list.module';

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
    RouterModule.forChild(routes)
  ]
})
export class ActionsModule { }
