import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { EventFieldPlayerComponent } from './event-field-player.component';

describe('EventFieldPlayerComponent', () => {
  let component: EventFieldPlayerComponent;
  let fixture: ComponentFixture<EventFieldPlayerComponent>;

  beforeEach(
    waitForAsync(() => {
      TestBed.configureTestingModule({
        declarations: [EventFieldPlayerComponent],
      }).compileComponents();
    })
  );

  beforeEach(() => {
    fixture = TestBed.createComponent(EventFieldPlayerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
