import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActionsComponent } from './actions.component';
import {Routes, RouterModule} from '@angular/router';
import {TodoListModule} from '../../components/todo-list/todo-list.module';
import {ActionsResolverService} from './actions-resolver.service';
import {ActionsGuard} from './actions.guard';

export const routes: Routes = [
  {
    path: '',
    component: ActionsComponent,
    resolve: {
      resolver: ActionsResolverService
    },
    canActivate: [ActionsGuard]
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
