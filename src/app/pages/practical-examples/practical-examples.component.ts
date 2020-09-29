import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { DropdownOption } from '../../entities/dropdown-option';
import { LoaderService } from '../../services/loader.service';

@Component({
  selector: 'app-practical-examples',
  templateUrl: './practical-examples.component.html',
  styleUrls: ['./practical-examples.component.scss'],
})
export class PracticalExamplesComponent implements OnInit {
  dropdownOptions: DropdownOption[] = [...Array(10).keys()].map((id) => ({
    id,
    text: `Option_${id}`,
  }));
  dropdown = new FormControl();

  constructor(private loaderService: LoaderService) {}

  ngOnInit() {}

  toggleLoader(status: boolean): void {
    this.loaderService.setLoaderStatus(status);
  }
}
