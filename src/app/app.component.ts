import {Component, OnInit} from '@angular/core';
import {NavigationItem} from './entities/navigation-item';
import {Router, NavigationEnd, NavigationStart} from '@angular/router';
import {filter, map } from 'rxjs/operators';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {

  navigationItems: NavigationItem[] = [
    {
      name: 'Home',
      path: '/home'
    },
    {
      name: 'Actions',
      path: '/actions'
    }
  ];
  loader: boolean;

  constructor(private router: Router){}

  ngOnInit() {
    this.router.events.pipe(
      filter(e => e instanceof NavigationEnd || e instanceof NavigationStart),
      map(e => e instanceof NavigationStart),
    ).subscribe(value => this.loader = value);
  }

}
