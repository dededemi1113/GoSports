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
  constructor(private navSvc: NavigateService, private router: Router) {
    var state = this.navSvc.getStateData();
    if (state && state.eventConfig) {
      this.eventConfig = state.eventConfig;
      this.game = state.game;
      console.log(this.eventConfig);
      console.log(this.game);
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
  onSave() {
    let isInvalid = false;
    // validate
    this.eventConfig.fieldConfigs.forEach((config: any) => {
      if (!config.isRequired) {
        return;
      }
      const fld = this.event.fields.find(
        (field: any) => field.configId === config.id
      );
      if (!fld || !fld.value) {
        config.isInvalid = true;
        isInvalid = true;
        return;
      }
    });
    if (isInvalid) {
      return;
    }
    // ensure the integrity of data
    if (!this.event.timeUtc) {
      this.event.timeUtc = new Date();
    }
    this.event.type = this.eventConfig.eventType;
    this.isSubmitting = true;
  }
}
