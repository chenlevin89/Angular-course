import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TooltipDirective } from './tooltip.directive';
import { TooltipComponent } from './tooltip.component';

@NgModule({
  declarations: [TooltipDirective, TooltipComponent],
  exports: [TooltipDirective],
  imports: [CommonModule],
  entryComponents: [TooltipComponent],
})
export class TooltipModule {}
