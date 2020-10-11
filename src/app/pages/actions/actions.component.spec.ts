import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ActionsComponent } from './actions.component';
import { TodoListService } from '../../services/todo-list.service';
import { RouterTestingModule } from '@angular/router/testing';
import { of } from 'rxjs';

describe('ActionsComponent', () => {
  let component: ActionsComponent;
  let fixture: ComponentFixture<ActionsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ActionsComponent],
      imports: [RouterTestingModule],
      providers: [
        {
          provide: TodoListService,
          useValue: {
            getTodoListData() {
              return of([]);
            },
            getSelectedActions() {
              return null;
            },
          },
        },
      ],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ActionsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
