import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { EventFieldTextComponent } from './event-field-text.component';

describe('EventFieldTextComponent', () => {
  let component: EventFieldTextComponent;
  let fixture: ComponentFixture<EventFieldTextComponent>;

  beforeEach(
    waitForAsync(() => {
      TestBed.configureTestingModule({
        declarations: [EventFieldTextComponent],
      }).compileComponents();
    })
  );

  beforeEach(() => {
    fixture = TestBed.createComponent(EventFieldTextComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
