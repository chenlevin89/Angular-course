import {Component, OnInit, ViewChild, ElementRef, AfterViewInit, OnDestroy, Output, EventEmitter} from '@angular/core';
import {fromEvent, Subject} from 'rxjs';
import {takeUntil, debounceTime, distinctUntilChanged, map, filter} from 'rxjs/operators';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SearchComponent implements OnInit, AfterViewInit, OnDestroy {

  @ViewChild('search', {static: false}) search: ElementRef;
  @Output() searchChanged = new EventEmitter<string>()

  private onDestroy$ = new Subject();

  constructor() {}

  ngOnInit() {
  }

  ngOnDestroy() {
    this.onDestroy$.next();
    this.onDestroy$.complete();
  }

  ngAfterViewInit() {
    fromEvent(this.search.nativeElement, 'input')
      .pipe(
        map((event: any) => event.target.value),
        filter(value => !value || value.length > 1),
        debounceTime(300),
        distinctUntilChanged(),
        takeUntil(this.onDestroy$)
      )
      .subscribe(term => {
        this.searchChanged.emit(term);
      })
  }

}
