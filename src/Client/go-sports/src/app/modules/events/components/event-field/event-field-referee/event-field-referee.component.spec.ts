import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { EventFieldRefereeComponent } from './event-field-referee.component';

describe('EventFieldRefereeComponent', () => {
  let component: EventFieldRefereeComponent;
  let fixture: ComponentFixture<EventFieldRefereeComponent>;

  beforeEach(
    waitForAsync(() => {
      TestBed.configureTestingModule({
        declarations: [EventFieldRefereeComponent],
      }).compileComponents();
    })
  );

  beforeEach(() => {
    fixture = TestBed.createComponent(EventFieldRefereeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
