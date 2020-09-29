import {
  Directive,
  ElementRef,
  AfterViewInit,
  Renderer2,
  ComponentFactoryResolver,
  ViewContainerRef,
  ComponentRef,
  OnDestroy,
} from '@angular/core';
import { TooltipComponent } from './tooltip.component';
import { fromEvent, Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';

@Directive({
  selector: '[appTooltip]',
})
export class TooltipDirective implements AfterViewInit, OnDestroy {
  private componentRef: ComponentRef<TooltipComponent>;
  private onDestroy$ = new Subject();

  constructor(
    private elementRef: ElementRef,
    private vcr: ViewContainerRef,
    private renderer: Renderer2,
    private cfr: ComponentFactoryResolver
  ) {}

  ngAfterViewInit() {
    this.renderer.addClass(this.elementRef.nativeElement, 'truncate');
    if (
      this.elementRef.nativeElement.scrollWidth >
      this.elementRef.nativeElement.clientWidth
    ) {
      this.initializeListeners();
    }
  }

  ngOnDestroy() {
    this.onDestroy$.next();
    this.onDestroy$.complete();
  }

  private initializeListeners(): void {
    fromEvent(this.elementRef.nativeElement, 'mouseenter')
      .pipe(takeUntil(this.onDestroy$))
      .subscribe((_) => {
        if (!this.componentRef) {
          const factory = this.cfr.resolveComponentFactory(TooltipComponent);
          this.componentRef = this.vcr.createComponent(factory);
          this.componentRef.instance.text = this.elementRef.nativeElement.innerText;
        }
      });

    fromEvent(this.elementRef.nativeElement, 'mouseleave')
      .pipe(takeUntil(this.onDestroy$))
      .subscribe((_) => {
        if (this.componentRef) {
          this.componentRef.destroy();
          this.componentRef = null;
        }
      });
  }
}
