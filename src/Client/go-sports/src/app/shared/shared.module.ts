import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { DigitInputComponent } from './components/digit-input/digit-input.component';
import { JsonDatePipe } from './pipes/json-date.pipe';

@NgModule({
  imports: [CommonModule],
  exports: [DigitInputComponent, JsonDatePipe],
  declarations: [DigitInputComponent, JsonDatePipe],
  providers: [],
})
export class SharedModule {}
