import { Validatable } from './../event-field.service';
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
  selector: 'gs-event-field-player',
  templateUrl: 'event-field-player.component.html',
  styleUrls: ['event-field-player.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class EventFieldPlayerComponent
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
  team: any = null;
  constructor() {}

  ngOnInit() {
    this._updateTeam();
  }
  ngAfterViewInit() {
    this.inited.emit(this);
  }
  onTeamChange(event: any) {
    this.team = this.game.teams.find(
      (tm: any) => tm.id.toString() === event.target.value
    );
  }
  onPlayerChange(event: any) {
    this.valueChanged.emit(event.target.value);
  }

  validate(value: string): boolean {
    // we've made the first player the default. no need to validate
    return true;
  }

  private _updateTeam() {
    if (!this.value) {
      this.team = this.game.teams[0];
      this.value = this.game.teams[0].players[0].id.toString();
      if (this.config.isRequired) {
        this.valueChanged.emit(this.value);
      }
      return;
    }
    for (let i = 0; i < this.game.teams.length; i++) {
      let found = false;
      for (let j = 0; j < this.game.teams[i].players.length; j++) {
        if (this.game.teams[i].players[j].id.toString() === this.value) {
          this.team = this.game.teams[i];
          found = true;
          break;
        }
      }
      if (found) {
        break;
      }
    }
    if (this.team === null) {
      this.team = this.game.teams[0];
    }
  }
}
