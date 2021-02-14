import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { EventFieldNumberComponent } from './event-field-number.component';

describe('EventFieldNumberComponent', () => {
  let component: EventFieldNumberComponent;
  let fixture: ComponentFixture<EventFieldNumberComponent>;

  beforeEach(
    waitForAsync(() => {
      TestBed.configureTestingModule({
        declarations: [EventFieldNumberComponent],
      }).compileComponents();
    })
  );

  beforeEach(() => {
    fixture = TestBed.createComponent(EventFieldNumberComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
