import {
  ChangeDetectionStrategy,
  Component,
  Input,
  OnInit,
  Output,
  EventEmitter,
} from '@angular/core';

@Component({
  selector: 'gs-event-field-text',
  templateUrl: 'event-field-text.component.html',
  styleUrls: ['event-field-text.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class EventFieldTextComponent implements OnInit {
  @Input()
  config: any;
  @Input()
  value: string = '';
  @Input()
  isInvalid = false;
  @Output()
  valueChanged = new EventEmitter<string>();
  constructor() {}

  ngOnInit() {}
  onTextChange(event: any) {
    const value = event.target.value;
    if (this.config.isRequired && !value) {
      this.isInvalid = true;
      return;
    }
    this.isInvalid = false;
    this.valueChanged.emit(value);
  }
}
