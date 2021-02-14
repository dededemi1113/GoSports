import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { EventFieldTeamScoresComponent } from './event-field-team-scores.component';

describe('EventFieldTeamScoresComponent', () => {
  let component: EventFieldTeamScoresComponent;
  let fixture: ComponentFixture<EventFieldTeamScoresComponent>;

  beforeEach(
    waitForAsync(() => {
      TestBed.configureTestingModule({
        declarations: [EventFieldTeamScoresComponent],
      }).compileComponents();
    })
  );

  beforeEach(() => {
    fixture = TestBed.createComponent(EventFieldTeamScoresComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
