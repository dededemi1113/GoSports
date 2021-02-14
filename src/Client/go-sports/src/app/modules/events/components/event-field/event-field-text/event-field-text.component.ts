import { Validatable } from '../../../services/event-field.service';
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
  selector: 'gs-event-field-text',
  templateUrl: 'event-field-text.component.html',
  styleUrls: ['event-field-text.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class EventFieldTextComponent
  implements OnInit, Validatable, AfterViewInit {
  @Input()
  config: any;
  @Input()
  value: string = '';
  @Input()
  isInvalid = false;
  @Output()
  valueChanged = new EventEmitter<string>();
  @Output()
  inited = new EventEmitter<Validatable>();
  constructor() {}
  validate(value: string): boolean {
    if (!this.config.isRequired) {
      this.isInvalid = false;
      return true;
    }
    if (this.config.isRequired && !value) {
      this.isInvalid = true;
      return false;
    }
    this.isInvalid = false;
    return true;
  }

  ngOnInit() {}
  ngAfterViewInit() {
    this.inited.emit(this);
  }
  onTextChange(event: any) {
    const value = event.target.value;
    if (this.validate(value)) {
      this.valueChanged.emit(value);
    }
  }
}
