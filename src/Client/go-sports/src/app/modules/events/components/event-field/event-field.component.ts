import { Validatable } from './event-field.service';
import { Constants } from './../../../../core/config/constants';
import {
  AfterViewInit,
  ChangeDetectionStrategy,
  Component,
  EventEmitter,
  Input,
  OnInit,
  Output,
} from '@angular/core';

@Component({
  selector: 'gs-event-field',
  templateUrl: 'event-field.component.html',
  styleUrls: ['event-field.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class EventFieldComponent implements OnInit, AfterViewInit, Validatable {
  @Input()
  config: any;
  @Input()
  value: string = '';
  @Input()
  game: any;
  @Input()
  isInvalidObj: any = null;
  @Output()
  valueChanged = new EventEmitter<string>();
  @Output()
  validatable: Validatable | null = null;
  @Output()
  inited = new EventEmitter<{ field: Validatable; configId: number }>();
  isInvalid = false;
  constructor(public constants: Constants) {}
  validate(value: string): boolean {
    if (!this.validatable) {
      return true;
    }
    return this.validatable.validate(value);
  }

  ngOnInit() {}
  ngAfterViewInit() {
    this.inited.emit({ field: this, configId: this.config.id });
  }

  onChange(value: string) {
    this.valueChanged.emit(value);
  }
  onFieldInited(evt: Validatable) {
    this.validatable = evt;
  }
}
