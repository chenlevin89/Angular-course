import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { DropdownOption } from '../../../../entities/dropdown-option';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss'],
})
export class ListComponent implements OnInit {
  @Input() list: DropdownOption[];
  @Input() selected: DropdownOption;

  @Output() selectOption = new EventEmitter<DropdownOption>();

  constructor() {}

  ngOnInit() {}

  select(option: DropdownOption) {
    this.selectOption.emit(option);
  }
}
