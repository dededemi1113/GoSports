import { AuthService } from './../../../../core/services/auth.service';
import { EventsService } from './../../../../core/services/events.service';
import { Validatable } from '../../services/event-field.service';
import { NavigateService } from './../../../../core/services/navigate.service';
import {
  ChangeDetectionStrategy,
  Component,
  Input,
  OnInit,
} from '@angular/core';
import { Router } from '@angular/router';
import { FileDetector } from 'protractor';

@Component({
  selector: 'gs-event-editor',
  templateUrl: 'event-editor.component.html',
  styleUrls: ['event-editor.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class EventEditorComponent implements OnInit {
  eventConfig: any = null;
  game: any = null;
  event: any = null;
  isSubmitting = false;
  private _fields: { field: Validatable; configId: number }[] = [];
  constructor(
    private navSvc: NavigateService,
    private router: Router,
    private eventSvc: EventsService,
    private authSvc: AuthService
  ) {
    var state = this.navSvc.getStateData();
    if (state && state.eventConfig) {
      this.eventConfig = state.eventConfig;
      this.game = state.game;
      // initialize event
      if (state.event) {
        this.event = state.event;
      } else {
        this.event = {
          gameId: this.game.id,
          type: this.eventConfig.eventType,
          fields: [],
        };
      }
    } else {
      this.router.navigate(['/events']);
    }
  }

  ngOnInit() {}

  getFieldValue(configId: number) {
    const field = this.event.fields.find(
      (fld: any) => fld.configId === configId
    );
    if (!field) {
      return '';
    }
    return field.value;
  }
  onFieldChange(value: string, config: any) {
    let field = this.event.fields.find(
      (fld: any) => fld.configId === config.id
    );
    if (!field) {
      // doesn't exist, create it
      field = { id: 0, configId: config.id, value: value };
      this.event.fields.push(field);
    } else {
      // update the value
      field.value = value;
    }
  }
  onFieldInited(evt: { field: Validatable; configId: number }) {
    this._fields.push(evt);
  }
  onSave() {
    let isInvalid = false;
    // validate
    this._fields.forEach((fld: { field: Validatable; configId: number }) => {
      const field = this.event.fields.find(
        (f: any) => f.configId === fld.configId
      );
      let value = '';
      if (field) value = field.value;
      if (!fld.field.validate(value)) {
        isInvalid = true;
      }
    });
    if (isInvalid) {
      return;
    }
    // ensure the integrity of data
    if (!this.event.timeUtc) {
      this.event.timeUtc = new Date().toISOString();
    }
    this.event.type = this.eventConfig.eventType;
    this.event.employeeId = this.authSvc.getEmployeeCode();
    this.isSubmitting = true;
    if (this.event.id) {
      this.eventSvc.update(this.event).subscribe((res: any) => {
        this._handleResult(res);
      });
    } else {
      this.eventSvc.add(this.event).subscribe((res: any) => {
        this._handleResult(res);
      });
    }
  }
  private _handleResult(res: any) {
    this.router.navigate(['/home']);
  }
}
