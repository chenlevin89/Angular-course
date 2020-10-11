import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DropdownComponent } from './dropdown.component';
import { ReactiveFormsModule } from '@angular/forms';
import { ListComponent } from './components/list/list.component';
import { SearchComponent } from './components/search/search.component';

@NgModule({
  declarations: [DropdownComponent, ListComponent, SearchComponent],
  exports: [DropdownComponent],
  imports: [CommonModule, ReactiveFormsModule],
})
export class DropdownModule {}
