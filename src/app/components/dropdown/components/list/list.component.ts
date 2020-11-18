import { Component, Input, Output, EventEmitter, ChangeDetectionStrategy } from '@angular/core';
import {DropdownOption} from '../../../../entities/dropdown-option';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ListComponent {

  @Input() list: DropdownOption[];
  @Input() selected: DropdownOption;

  @Output() selectOption = new EventEmitter<DropdownOption>();

  select(option: DropdownOption){
    this.selectOption.emit(option);
  }

}
