import {
  ChangeDetectionStrategy,
  Component,
  EventEmitter,
  Input,
  OnInit,
  Output,
} from '@angular/core';

@Component({
  selector: 'gs-digit-input',
  templateUrl: 'digit-input.component.html',
  styleUrls: ['digit-input.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class DigitInputComponent implements OnInit {
  @Input()
  value = '';

  @Output()
  submitted: EventEmitter<string> = new EventEmitter<string>();

  constructor() {}

  ngOnInit() {}

  onButtonClick(str: string) {
    if (str === 'OK') {
      this.submitted.emit(this.value);
      return;
    }
    if (str === '<') {
      if (this.value.length > 0) {
        this.value = this.value.substr(0, this.value.length - 1);
      }
      return;
    }
    this.value += str;
  }
}
