import {Component, ViewChild, ElementRef, AfterViewInit, OnDestroy, Output, EventEmitter, ChangeDetectionStrategy, Renderer2} from '@angular/core';
import {fromEvent, Subject} from 'rxjs';
import {takeUntil, debounceTime, distinctUntilChanged, map, filter} from 'rxjs/operators';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class SearchComponent implements AfterViewInit, OnDestroy {

  @ViewChild('search') search: ElementRef;
  @Output() searchChanged = new EventEmitter<string>()

  private onDestroy$ = new Subject();

  constructor(private renderer: Renderer2) {}

  ngOnDestroy() {
    this.onDestroy$.next();
    this.onDestroy$.complete();
  }

  ngAfterViewInit() {
    fromEvent(this.search.nativeElement, 'input')
      .pipe(
        map((event: any) => event.target.value),
        filter(value => !value || value.length > 1),
        distinctUntilChanged(),
        debounceTime(300),
        takeUntil(this.onDestroy$)
      )
      .subscribe(term => {
        this.searchChanged.emit(term);
      })
  }

  clearSearch(){
    this.renderer.setProperty(this.search.nativeElement, 'value', null);
    this.search.nativeElement.dispatchEvent(new Event('input'));
  }

}
