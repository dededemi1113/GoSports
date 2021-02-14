import { Validatable } from './../event-field.service';
import {
  ChangeDetectionStrategy,
  Component,
  Input,
  OnInit,
  Output,
  EventEmitter,
  AfterViewInit,
} from '@angular/core';

@Component({
  selector: 'gs-event-field-number',
  templateUrl: 'event-field-number.component.html',
  styleUrls: ['event-field-number.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class EventFieldNumberComponent
  implements OnInit, Validatable, AfterViewInit {
  @Input()
  config: any;
  @Input()
  value: string = '';
  @Output()
  valueChanged = new EventEmitter<string>();
  @Output()
  inited = new EventEmitter<Validatable>();
  isInvalid = false;

  constructor() {}

  ngOnInit() {}
  ngAfterViewInit() {
    this.inited.emit(this);
  }
  validate(value: string): boolean {
    if (!this.config.isRequired) {
      this.isInvalid = false;
      return true;
    }
    if (this.config.isRequired && (value === '' || value === null)) {
      this.isInvalid = true;
      return false;
    }
    this.isInvalid = false;
    return true;
  }
  onTextChange(event: any) {
    const value = event.target.value;
    if (this.validate(value)) {
      this.valueChanged.emit(value);
    }
  }
}
