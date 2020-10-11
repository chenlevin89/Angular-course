import { Component, OnInit } from '@angular/core';
import { TodoItem } from './entities/todo-item';
import { TodoListService } from './services/todo-list.service';
import { NavigationItem } from './components/navigation/navigation-item';
import { LoaderService } from './services/loader.service';
import { Observable, merge } from 'rxjs';
import { Router, NavigationStart, NavigationEnd } from '@angular/router';
import { filter, map, tap } from 'rxjs/operators';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  navigationItems: NavigationItem[] = [
    {
      name: 'Home',
      path: '/home',
    },
    {
      name: 'Actions',
      path: '/actions',
    },
    {
      name: 'Practical examples',
      path: '/practical-examples',
    },
  ];

  loader$: Observable<boolean>;

  constructor(private loaderService: LoaderService, private router: Router) {}

  ngOnInit() {
    const navigation$ = this.router.events.pipe(
      filter(
        (event) =>
          event instanceof NavigationStart || event instanceof NavigationEnd
      ),
      map((event) => event instanceof NavigationStart)
    );

    this.loader$ = merge(navigation$, this.loaderService.loaderStatus$);
  }
}
