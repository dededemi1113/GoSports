import { ApiHttpService } from './api-http.service';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

export interface Event {
  id?: number;
  gameId: number;
  timeUtc: Date;
  employeeId: string;
  type: string;
  fields: {
    id?: number;
    configId: number;
    value: string;
  }[];
}

@Injectable({ providedIn: 'root' })
export class EventsService {
  constructor(
    // Angular Modules
    private api: ApiHttpService
  ) {}
  public getEvents(param: {
    gameId: number;
    startIndex: number;
    fetchSize: number;
  }): Observable<any> {
    return this.api.get('event', [
      { key: 'GameId', value: param.gameId.toString() },
      { key: 'StartIndex', value: param.startIndex.toString() },
      { key: 'FetchSize', value: param.fetchSize.toString() },
    ]);
  }

  public add(evt: Event) {
    return this.api.post('event', evt);
  }

  public update(evt: Event) {
    return this.api.put('event/' + evt.id, evt);
  }

  public delete(id: number) {
    return this.api.delete('event/' + id);
  }
}
