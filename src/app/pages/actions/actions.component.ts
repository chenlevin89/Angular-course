import {Component, OnInit, ChangeDetectionStrategy, OnDestroy} from '@angular/core';
import {TodoItem} from '../../entities/todo-item';
import {TodoListService} from '../../services/todo-list.service';
import {FormControl, Validators} from '@angular/forms';
import {Subject} from 'rxjs';


// Todo
@Component({
  selector: 'app-actions',
  templateUrl: './actions.component.html',
  styleUrls: ['./actions.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ActionsComponent implements OnInit, OnDestroy {

  todoList: TodoItem[];
  // todoList$: Observable<TodoItem[]>;
  userName: string;
  selectedActions = new FormControl(null, Validators.required);

  private onDestroy$ = new Subject();
  // private todoListSubject$ = new Subject<TodoItem>();

  constructor(private todoListService: TodoListService) {}

  ngOnInit() {

    this.todoList = this.todoListService.getTodoListData();

    // this.todoList$ = merge(this.todoListService.getTodoListData(), this.todoListSubject$.asObservable())
    //   .pipe(
    //     scan((acc, value) => {
    //       if (Array.isArray(value)) {
    //         return [...acc, ...value];
    //       }
    //       return [...acc, value];
    //     }, [])
    //   );

    this.selectedActions.setValue(this.todoListService.getSelectedActions());

    this.selectedActions.valueChanges.subscribe(value => {
      this.todoListService.updateSelectedActions(value);
    });

    // this.selectedActions.valueChanges
    //   .pipe(
    //     takeUntil(this.onDestroy$)
    //   )
    //   .subscribe(value => {
    //     this.todoListService.updateSelectedActions(value);
    //   });
  }

  ngOnDestroy() {
    this.onDestroy$.next();
    this.onDestroy$.complete();
  }

  // addItem(item: TodoItem): void {
  //   this.todoListSubject$.next(item);
  // }

  addItem(item: TodoItem): void {
    this.todoList = [...this.todoList, item]; // Immutable
  }
}
