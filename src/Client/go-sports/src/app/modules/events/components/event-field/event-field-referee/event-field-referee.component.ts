import {
  ChangeDetectionStrategy,
  Component,
  EventEmitter,
  Input,
  OnInit,
  Output,
} from '@angular/core';

@Component({
  selector: 'gs-event-field-referee',
  templateUrl: 'event-field-referee.component.html',
  styleUrls: ['event-field-referee.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class EventFieldRefereeComponent implements OnInit {
  @Input()
  config: any;
  @Input()
  value: string = '';
  @Input()
  game: any;
  @Output()
  valueChanged = new EventEmitter<string>();

  constructor() {}

  ngOnInit() {
    // make sure the default is selected
    if (
      !this.value &&
      this.config.isRequired &&
      this.game.referees.length > 0
    ) {
      this.value = this.game.referees[0].id;
      this.valueChanged.emit(this.value);
    }
  }
  onTextChange(event: any) {
    this.valueChanged.emit(event.target.value);
  }
}
