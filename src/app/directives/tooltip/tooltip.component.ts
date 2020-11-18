import { Component, Input, AfterViewInit, ElementRef, ViewChild, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'app-tooltip',
  template: `<span #tooltip >{{text}}</span>`,
  changeDetection: ChangeDetectionStrategy.OnPush,
  styles: [`
    :host{
      position: relative;
    }
    span{
      position: absolute;
      width: 250px;
      background-color: black;
      padding: 10px;
      color: white;
      border-radius: 4px;
    }
  `]
})
export class TooltipComponent implements AfterViewInit {

  @ViewChild('tooltip') tooltip: ElementRef;

  @Input() text: string;
  top = 0;

  ngAfterViewInit(){
   this.top -= this.tooltip.nativeElement.clientHeight;
  }

}
