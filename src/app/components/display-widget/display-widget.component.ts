import { Component, OnInit, Input } from '@angular/core';
import {Widget} from '../../entities/widget';

@Component({
  selector: 'app-display-widget',
  templateUrl: './display-widget.component.html',
  styleUrls: ['./display-widget.component.scss']
})
export class DisplayWidgetComponent implements OnInit {

  @Input() widget: Widget;

  constructor() { }

  ngOnInit(): void {
  }

}
