import { Injectable } from '@angular/core';

@Injectable({ providedIn: 'root' })
export class Constants {
  public readonly API_ENDPOINT: string = 'http://localhost:4200/api/';
  public readonly GameType = Object.freeze({
    Soccer: 1,
    Basketball: 2,
  });
}
