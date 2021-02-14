import { Injectable } from '@angular/core';

@Injectable({ providedIn: 'root' })
export class Constants {
  public readonly API_ENDPOINT: string = 'http://localhost:4200/api/';
  public readonly GameType = Object.freeze({
    Soccer: 1,
    Basketball: 2,
  });
  public readonly FieldType = Object.freeze({
    Text: 1,
    // DateTime: 2,
    Player_Single: 3,
    // Player_Multiple: 4,
    Number: 5,
    Referee: 6,
    Dropdown: 7,
    TeamScores: 8,
    TextArea: 9,
  });
}
