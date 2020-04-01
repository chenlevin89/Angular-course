import { Component, Input } from '@angular/core';
import {NavigationItem} from '../../entities/navigation-item';

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.scss']
})
export class NavigationComponent {

  @Input() navigationItems: NavigationItem[];

}
