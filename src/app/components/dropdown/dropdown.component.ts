import {Component, OnInit, Input, forwardRef, OnDestroy} from '@angular/core';
import {ControlValueAccessor, NG_VALUE_ACCESSOR, FormControl} from '@angular/forms';
import {Subject, BehaviorSubject} from 'rxjs';
import {takeUntil} from 'rxjs/operators';
import {DropdownOption} from '../../entities/dropdown-option';

@Component({
  selector: 'app-dropdown',
  templateUrl: './dropdown.component.html',
  styleUrls: ['./dropdown.component.scss'],
  providers: [
    {provide: NG_VALUE_ACCESSOR, multi: true, useExisting: forwardRef(() => DropdownComponent)}
  ]
})
export class DropdownComponent implements OnInit, ControlValueAccessor, OnDestroy {

  @Input() set options(value: DropdownOption[]) {
    this.sourceOptions = [...value];
    this.displayedOptions$.next(value);
  }

  displayedOptions$ = new BehaviorSubject<DropdownOption[]>([]);
  selected = new FormControl();
  toggle = false;

  private sourceOptions: DropdownOption[];
  private onDestroy$ = new Subject();

  constructor() {}

  ngOnInit() {
  }

  ngOnDestroy() {
    this.onDestroy$.next();
    this.onDestroy$.complete();
  }

  searchChanged(term: string) {
    if(!term){
      this.displayedOptions$.next(this.sourceOptions);
    } else {
      const options = this.sourceOptions.filter(option => option.text.toLowerCase().indexOf(term.toLocaleLowerCase()) !== -1);
      this.displayedOptions$.next(options);
    }
  }

  selectOption(option: DropdownOption){
    this.selected.setValue(option);
    this.toggle = false;
  }

  writeValue(obj: DropdownOption): void {
    this.selected.setValue(obj);
  }
  registerOnChange(fn: any): void {
    this.selected.valueChanges.pipe(takeUntil(this.onDestroy$)).subscribe(fn);
  }
  registerOnTouched(fn: any): void {

  }
  setDisabledState?(isDisabled: boolean): void {

  }

}
