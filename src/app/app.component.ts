import {Component, OnInit} from '@angular/core';
import {TodoItem} from './entities/todo-item';
import {TodoListService} from './services/todo-list.service';
import {NavigationItem} from './components/navigation/navigation-item';
import {Router, NavigationEnd, NavigationStart} from '@angular/router';
import {filter, map} from 'rxjs/operators';
import {Observable} from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {

  loader$: Observable<boolean>;
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

  constructor(private router: Router) {}

  ngOnInit() {
    this.loader$ = this.router.events.pipe(
      filter(e => e instanceof NavigationEnd || e instanceof NavigationStart),
      map(e => e instanceof NavigationStart),
    );
  }
}
