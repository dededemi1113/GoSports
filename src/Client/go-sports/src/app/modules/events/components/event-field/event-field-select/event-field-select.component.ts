import {
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
export class EventFieldSelectComponent implements OnInit {
  @Input()
  config: any;
  @Input()
  value: string = '';
  @Output()
  valueChanged = new EventEmitter<string>();
  options: string[] = [];
  constructor() {}

  ngOnInit() {
    this.options = JSON.parse(this.config.data);
    if(!this.value && this.config.isRequired && this.options.length>0) {
      this.value = this.options[0];
      this.valueChanged.emit(this.value);
    }
  }
  onTextChange(event: any) {
    this.valueChanged.emit(event.target.value);
  }
}
