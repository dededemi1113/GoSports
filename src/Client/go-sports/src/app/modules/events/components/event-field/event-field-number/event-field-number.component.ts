import {
  ChangeDetectionStrategy,
  Component,
  Input,
  OnInit,
  Output,
  EventEmitter,
} from '@angular/core';

@Component({
  selector: 'gs-event-field-number',
  templateUrl: 'event-field-number.component.html',
  styleUrls: ['event-field-number.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class EventFieldNumberComponent implements OnInit {
  @Input()
  config: any;
  @Input()
  value: string = '';
  @Output()
  valueChanged = new EventEmitter<string>();

  constructor() {}

  ngOnInit() {}
  onTextChange(event: any) {
    this.valueChanged.emit(event.target.value);
  }
}
