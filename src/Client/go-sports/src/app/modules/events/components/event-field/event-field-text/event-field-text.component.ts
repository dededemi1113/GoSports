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
  @Output()
  valueChanged = new EventEmitter<string>();

  constructor() {}

  ngOnInit() {}
  onTextChange(event: any) {
    this.valueChanged.emit(event.target.value);
  }
}
