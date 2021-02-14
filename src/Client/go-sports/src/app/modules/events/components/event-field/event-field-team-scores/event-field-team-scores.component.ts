import { Validatable } from './../event-field.service';
import {
  ChangeDetectionStrategy,
  Component,
  Input,
  OnInit,
  Output,
  EventEmitter,
  AfterViewInit,
} from '@angular/core';

@Component({
  selector: 'gs-event-field-team-scores',
  templateUrl: 'event-field-team-scores.component.html',
  styleUrls: ['event-field-team-scores.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class EventFieldTeamScoresComponent
  implements OnInit, Validatable, AfterViewInit {
  @Input()
  config: any;
  @Input()
  value: string = '';
  @Input()
  game: any = null;
  @Output()
  valueChanged = new EventEmitter<string>();
  @Output()
  inited = new EventEmitter<Validatable>();
  // score<0 means no value
  teamScores: { teamId: number; score: number }[] = [];
  isInvalidObj: string[] = [];
  constructor() {}

  ngOnInit() {
    this._updateTeamScores();
  }
  ngAfterViewInit() {
    this.inited.emit(this);
  }
  onTextChange(event: any, team: any) {
    const value = event.target.value;
    const score = parseInt(value);
    let teamScore = this.teamScores.find((ts) => ts.teamId === team.id);
    if (!isNaN(score)) {
      if (!teamScore) {
        teamScore = { teamId: team.id, score: score };
        this.teamScores.push(teamScore);
      } else {
        teamScore.score = score;
      }
    } else {
      if (teamScore) {
        teamScore.score = -1;
      }
    }

    if (this.validate(JSON.stringify(this.teamScores))) {
      this.valueChanged.emit(this.value);
    }
  }
  getScore(teamId: number): string {
    const teamScore = this.teamScores.find((ts) => ts.teamId === teamId);
    if (teamScore && teamScore.score > -1) {
      return teamScore.score.toString();
    }
    return '';
  }
  private _updateTeamScores() {
    if (this.value) {
      this.teamScores = JSON.parse(this.value);
      return;
    }
    this.teamScores = [];
    this.game.teams.forEach((team: any) => {
      this.teamScores.push({ teamId: team.id, score: -1 });
    });
  }
  validate(value: string): boolean {
    if (!this.config.isRequired) {
      this.value = value;
      return true;
    }
    let teamScores;
    if (!value) {
      teamScores = [];
      this.game.teams.forEach((team: any) => {
        teamScores.push({ teamId: team.id, score: -1 });
      });
    } else {
      teamScores = JSON.parse(value);
    }
    const invalidItems = teamScores.filter((team: any) => team.score < 0);
    if (invalidItems && invalidItems.length > 0) {
      this.isInvalidObj = invalidItems.map((item: any) =>
        item.teamId.toString()
      );
      return false;
    }
    this.isInvalidObj = [];
    this.value = value;
    return true;
  }
}
