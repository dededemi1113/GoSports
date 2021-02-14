import { ApiHttpService } from './api-http.service';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class TemplatesService {
  constructor(
    // Angular Modules
    private api: ApiHttpService
  ) {}
  // cache at the client side, refreshes every time when reloading
  private _templates: any;
  public getTemplates(): Observable<any> {
    if (this._templates) {
      return of(this._templates);
    }
    var templates$ = this.api.get('template');
    templates$.subscribe((res) => (this._templates = res));
    return templates$;
  }
}
