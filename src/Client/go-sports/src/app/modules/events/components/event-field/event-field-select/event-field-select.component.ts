import { Validatable } from './../event-field.service';
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
  selector: 'gs-event-field-select',
  templateUrl: 'event-field-select.component.html',
  styleUrls: ['event-field-select.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class EventFieldSelectComponent
  implements OnInit, Validatable, AfterViewInit {
  @Input()
  config: any;
  @Input()
  value: string = '';
  @Output()
  valueChanged = new EventEmitter<string>();
  @Output()
  inited = new EventEmitter<Validatable>();
  options: string[] = [];
  constructor() {}

  ngOnInit() {
    this.options = JSON.parse(this.config.data);
    if (!this.value && this.config.isRequired && this.options.length > 0) {
      this.value = this.options[0];
      this.valueChanged.emit(this.value);
    }
  }
  ngAfterViewInit() {
    this.inited.emit(this);
  }
  onTextChange(event: any) {
    this.valueChanged.emit(event.target.value);
  }
  validate(value: string): boolean {
    return true;
  }
}
