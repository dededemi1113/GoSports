import { Validatable } from '../../../services/event-field.service';
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
  selector: 'gs-event-field-referee',
  templateUrl: 'event-field-referee.component.html',
  styleUrls: ['event-field-referee.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class EventFieldRefereeComponent
  implements OnInit, Validatable, AfterViewInit {
  @Input()
  config: any;
  @Input()
  value: string = '';
  @Input()
  game: any;
  @Output()
  valueChanged = new EventEmitter<string>();
  @Output()
  inited = new EventEmitter<Validatable>();

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
