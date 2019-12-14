import {Component} from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  todoList = [
    {
      id: 0,
      title: 'Angular basic'
    },
    {
      id: 1,
      title: 'Building blocks',
    },
    {
      id: 2,
      title: 'Components communication'
    },
    {
      id: 3,
      title: 'Performance and best practices'
    }
  ];
}
