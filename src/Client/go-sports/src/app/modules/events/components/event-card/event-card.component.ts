import { ThisReceiver, ThrowStmt } from '@angular/compiler';
import {
  ChangeDetectionStrategy,
  Component,
  EventEmitter,
  Input,
  OnInit,
  Output,
} from '@angular/core';

@Component({
  selector: 'gs-event-card',
  templateUrl: 'event-card.component.html',
  styleUrls: ['event-card.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class EventCardComponent implements OnInit {
  @Input()
  template: any;
  @Input()
  event: any;
  @Input()
  game: any;
  @Output()
  clicked = new EventEmitter<any>();
  @Output()
  delete = new EventEmitter<any>();
  eventConfig: any;
  fields = [];
  constructor() {}

  ngOnInit() {
    this.eventConfig = this.template.events.find(
      (evt: any) => evt.eventType === this.event.type
    );
  }

  getFieldConfig(field: any): any {
    const fieldConfig = this.eventConfig.fieldConfigs.find(
      (cfg: any) => cfg.id === field.configId
    );
    return fieldConfig;
  }
  onClick() {
    this.clicked.emit(this.event);
  }
  onDelete(event: MouseEvent) {
    event.stopPropagation();
    this.delete.emit(this.event);
  }
}
