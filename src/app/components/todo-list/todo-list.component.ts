import {Component, OnInit, Input} from '@angular/core';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.scss']
})
export class TodoListComponent implements OnInit {

  @Input() list: {id: number, title: string}[];

  private counter = 0;

  constructor() {}

  ngOnInit() {
  }

  add() {
    this.counter ++;
    this.list.push({id: this.list.length, title: `New action ${this.counter}`});
  }

}
