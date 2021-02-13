import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { DigitInputComponent } from './digit-input.component';

describe('DigitInputComponent', () => {
  let component: DigitInputComponent;
  let fixture: ComponentFixture<DigitInputComponent>;

  beforeEach(
    waitForAsync(() => {
      TestBed.configureTestingModule({
        declarations: [DigitInputComponent],
      }).compileComponents();
    })
  );

  beforeEach(() => {
    fixture = TestBed.createComponent(DigitInputComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
