import { Injectable } from '@angular/core';
import { Constants } from '../../../core/config/constants';
import { GamesService } from '../../../core/services/games.service';
export interface Validatable {
  validate(value: string): boolean;
}
export interface Describable {
  getDescription(value: string): string;
}

@Injectable()
export class EventFieldService {
  constructor(private constants: Constants, private gameSvc: GamesService) {}
  public getDescription(field: any, fieldConfig: any): string {
    const game = this.gameSvc.getSelectedGame();
    if (!game || !fieldConfig) {
      return '';
    }

    const describer: Describable | null = createDescriber(
      fieldConfig.type,
      this.constants,
      game
    );
    if (describer == null) {
      return '';
    }

    return describer.getDescription(field.value);
  }
}

class TextFieldDescriber implements Describable {
  getDescription(value: string): string {
    return value;
  }
}
class NumberFieldDescriber implements Describable {
  getDescription(value: string): string {
    return value;
  }
}
class SelectFieldDescriber implements Describable {
  getDescription(value: string): string {
    return value;
  }
}
class PlayerFieldDescriber implements Describable {
  constructor(private game: any) {}
  getDescription(value: string): string {
    if (!value) {
      return '';
    }
    let name = '';
    this.game.teams.forEach((team: any) => {
      team.players.forEach((player: any) => {
        if (player.id.toString() === value) {
          name = player.name;
          return;
        }
      });
    });
    return name;
  }
}
class RefereeFieldDescriber implements Describable {
  constructor(private game: any) {}
  getDescription(value: string): string {
    if (!value) {
      return '';
    }
    let name = '';
    this.game.referees.forEach((referee: any) => {
      if (referee.id.toString() === value) {
        name = referee.name;
        return;
      }
    });
    return name;
  }
}
class TeamScoresDescriber implements Describable {
  constructor(private game: any) {}
  getDescription(value: string): string {
    if (!value) {
      return '';
    }
    const teamScores: { teamId: number; score: number }[] = JSON.parse(value);
    let result = '';
    teamScores.forEach(
      (ts: { teamId: number; score: number }, index: number) => {
        const team = this.game.teams.find((tm: any) => tm.id === ts.teamId);
        if (!team) {
          return;
        }
        result += team.name + '-' + team.score;
        if (index < teamScores.length - 1) {
          result += ' : ';
        }
      }
    );
    return result;
  }
}

const createDescriber = function (
  configType: number,
  constants: Constants,
  game: any
): Describable | null {
  switch (configType) {
    case constants.FieldType.Text:
      return new TextFieldDescriber();
    case constants.FieldType.Dropdown:
      return new SelectFieldDescriber();
    case constants.FieldType.Number:
      return new NumberFieldDescriber();
    case constants.FieldType.Player_Single:
      return new PlayerFieldDescriber(game);
    case constants.FieldType.Referee:
      return new RefereeFieldDescriber(game);
    case constants.FieldType.TeamScores:
      return new TeamScoresDescriber(game);
  }
  return null;
};
