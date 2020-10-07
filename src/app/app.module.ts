import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import {TodoListModule} from './components/todo-list/todo-list.module';
import {DisplayWidgetModule} from './components/display-widget/display-widget.module';


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    TodoListModule,
    DisplayWidgetModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
