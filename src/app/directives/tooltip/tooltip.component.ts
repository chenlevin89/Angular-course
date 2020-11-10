import { Component, OnInit, Input, AfterViewInit, ElementRef, ViewChild } from '@angular/core';

@Component({
  selector: 'app-tooltip',
  template: `<span #tooltip >{{text}}</span>`,
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
export class TooltipComponent implements OnInit, AfterViewInit {

  @ViewChild('tooltip') tooltip: ElementRef;

  @Input() text: string;
  top = 0;

  constructor() { }

  ngOnInit() {
  }

  ngAfterViewInit(){
   this.top -= this.tooltip.nativeElement.clientHeight;
  }

}
