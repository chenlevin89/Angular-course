import {Directive, ElementRef, AfterViewInit} from '@angular/core';

@Directive({
  selector: '[appTooltip]'
})
export class TooltipDirective implements AfterViewInit {

  constructor(private elementRef: ElementRef) {}

  ngAfterViewInit() {
    if (this.elementRef.nativeElement.scrollWidth > this.elementRef.nativeElement.clientWidth) {
      this.elementRef.nativeElement.setAttribute('title', this.elementRef.nativeElement.innerText);
    }
  }

}
