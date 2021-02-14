import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { EventFieldSelectComponent } from './event-field-select.component';

describe('EventFieldSelectComponent', () => {
  let component: EventFieldSelectComponent;
  let fixture: ComponentFixture<EventFieldSelectComponent>;

  beforeEach(
    waitForAsync(() => {
      TestBed.configureTestingModule({
        declarations: [EventFieldSelectComponent],
      }).compileComponents();
    })
  );

  beforeEach(() => {
    fixture = TestBed.createComponent(EventFieldSelectComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
