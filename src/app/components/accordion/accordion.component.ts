import { Component, OnInit, Input, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'app-accordion',
  templateUrl: './accordion.component.html',
  styleUrls: ['./accordion.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class AccordionComponent implements OnInit {

  @Input() header: string;

  toggle = false;

  constructor() { }

  ngOnInit() {
  }

}
