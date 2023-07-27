import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StudiosComponent } from './studios.component';

describe('StudiosComponent', () => {
  let component: StudiosComponent;
  let fixture: ComponentFixture<StudiosComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [StudiosComponent]
    });
    fixture = TestBed.createComponent(StudiosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
