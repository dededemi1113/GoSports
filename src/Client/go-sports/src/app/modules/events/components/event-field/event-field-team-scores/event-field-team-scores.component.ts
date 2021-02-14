import {
  ChangeDetectionStrategy,
  Component,
  Input,
  OnInit,
  Output,
  EventEmitter,
} from '@angular/core';

@Component({
  selector: 'gs-event-field-team-scores',
  templateUrl: 'event-field-team-scores.component.html',
  styleUrls: ['event-field-team-scores.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class EventFieldTeamScoresComponent implements OnInit {
  @Input()
  config: any;
  @Input()
  value: string = '';
  @Input()
  isInvalidObj: string[] = [];
  @Input()
  game: any = null;
  @Output()
  valueChanged = new EventEmitter<string>();
  // score<0 means no value
  teamScores: { teamId: number; score: number }[] = [];
  constructor() {}

  ngOnInit() {
    this._updateTeamScores();
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

    if (this._validate()) {
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
  private _validate(): boolean {
    if (!this.config.isRequired) {
      this.value = JSON.stringify(this.teamScores);
      return true;
    }
    const invalidItems = this.teamScores.filter((team) => team.score < 0);
    if (invalidItems && invalidItems.length > 0) {
      this.isInvalidObj = invalidItems.map((item) => item.teamId.toString());
      return false;
    }
    this.isInvalidObj = [];
    this.value = JSON.stringify(this.teamScores);
    return true;
  }
}
