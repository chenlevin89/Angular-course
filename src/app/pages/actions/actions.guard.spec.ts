import { TestBed, async, inject } from '@angular/core/testing';

import { ActionsGuard } from './actions.guard';

describe('ActionsGuard', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ActionsGuard],
    });
  });

  it('should ...', inject([ActionsGuard], (guard: ActionsGuard) => {
    expect(guard).toBeTruthy();
  }));
});
