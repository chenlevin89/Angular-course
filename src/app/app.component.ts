import {Component, OnInit} from '@angular/core';
import {TodoItem} from './entities/todo-item';
import {TodoListService} from './services/todo-list.service';
import {NavigationItem} from './components/navigation/navigation-item';

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

  ngOnInit() {

  }
}
