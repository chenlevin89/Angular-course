import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PracticalExamplesComponent } from './practical-examples.component';

describe('PracticalExamplesComponent', () => {
  let component: PracticalExamplesComponent;
  let fixture: ComponentFixture<PracticalExamplesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PracticalExamplesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PracticalExamplesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
