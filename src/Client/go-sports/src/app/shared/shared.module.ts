import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { DigitInputComponent } from './components/digit-input/digit-input.component';

@NgModule({
  imports: [CommonModule],
  exports: [DigitInputComponent],
  declarations: [DigitInputComponent],
  providers: [],
})
export class SharedModule {}
