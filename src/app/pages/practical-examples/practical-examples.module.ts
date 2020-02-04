import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PracticalExamplesComponent } from './practical-examples.component';
import {Routes, RouterModule} from '@angular/router';
import {ReactiveFormsModule} from '@angular/forms';
import {DropdownModule} from '../../components/dropdown/dropdown.module';
import {AccordionModule} from '../../components/accordion/accordion.module';
import {TooltipModule} from '../../directives/tooltip/tooltip.module';

const routes: Routes = [
  {
    path: '',
    component: PracticalExamplesComponent
  }
]

@NgModule({
  declarations: [PracticalExamplesComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    ReactiveFormsModule,
    DropdownModule,
    AccordionModule,
    TooltipModule
  ]
})
export class PracticalExamplesModule { }
