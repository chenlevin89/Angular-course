import { TestBed } from '@angular/core/testing';

import { TodoListService } from './todo-list.service';
import { HttpClientModule } from '@angular/common/http';

describe('TodoListService', () => {
  beforeEach(() =>
    TestBed.configureTestingModule({
      imports: [HttpClientModule],
    })
  );

  it('should be created', () => {
    const service: TodoListService = TestBed.get(TodoListService);
    expect(service).toBeTruthy();
  });
});
