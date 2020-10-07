import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DisplayWidgetComponent } from './display-widget.component';



@NgModule({
  declarations: [DisplayWidgetComponent],
  exports: [DisplayWidgetComponent],
  imports: [
    CommonModule
  ]
})
export class DisplayWidgetModule { }
