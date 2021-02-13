import { ApiHttpService } from './api-http.service';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class TemplatesService {
  constructor(
    // Angular Modules
    private api: ApiHttpService
  ) {}
  public getTemplates(): Observable<any> {
    return this.api.get('template');
  }
}
