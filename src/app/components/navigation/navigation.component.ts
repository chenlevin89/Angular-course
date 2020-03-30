import { Component, OnInit, Input } from '@angular/core';
import {NavigationItem} from '../../entities/navigation-item';

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.scss']
})
export class NavigationComponent implements OnInit {

  @Input() navigationItems: NavigationItem[];

  constructor() { }

  ngOnInit() {
  }

}
