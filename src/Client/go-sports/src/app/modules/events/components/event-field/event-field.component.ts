import { Constants } from './../../../../core/config/constants';
import {
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
export class EventFieldComponent implements OnInit {
  @Input()
  config: any;
  @Input()
  value: string = '';
  @Input()
  game: any;
  @Input()
  isInvalid = false;
  @Input()
  isInvalidObj: any = null;
  @Output()
  valueChanged = new EventEmitter<string>();

  constructor(public constants: Constants) {}

  ngOnInit() {}

  onChange(value: string) {
    this.valueChanged.emit(value);
  }
}
