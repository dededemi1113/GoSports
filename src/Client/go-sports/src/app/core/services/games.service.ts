import { ApiHttpService } from './api-http.service';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class GamesService {
  private readonly _cacheKey = 'GAME';
  constructor(
    // Angular Modules
    private api: ApiHttpService
  ) {}
  public getGames(): Observable<any> {
    return this.api.get('game');
  }
  public setGame(game: any): void {
    localStorage.setItem(this._cacheKey, JSON.stringify(game));
  }
  public getSelectedGame(): any {
    const json = localStorage.getItem(this._cacheKey);
    if (!json) {
      return null;
    }
    return JSON.parse(json);
  }
}
