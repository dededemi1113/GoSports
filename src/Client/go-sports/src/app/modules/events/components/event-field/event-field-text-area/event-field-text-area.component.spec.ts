import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { EventFieldTextAreaComponent } from './event-field-text-area.component';

describe('EventFieldTextAreaComponent', () => {
  let component: EventFieldTextAreaComponent;
  let fixture: ComponentFixture<EventFieldTextAreaComponent>;

  beforeEach(
    waitForAsync(() => {
      TestBed.configureTestingModule({
        declarations: [EventFieldTextAreaComponent],
      }).compileComponents();
    })
  );

  beforeEach(() => {
    fixture = TestBed.createComponent(EventFieldTextAreaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
