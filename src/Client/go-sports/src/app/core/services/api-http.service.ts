import { Constants } from './../config/constants';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class ApiHttpService {
  constructor(
    // Angular Modules
    private http: HttpClient,
    private constants: Constants
  ) {}
  public get(method: string, options?: any) {
    var url = this._generateUrl(method);
    return this.http.get(url, options);
  }
  public post(method: string, data: any, options?: any) {
    var url = this._generateUrl(method);
    return this.http.post(url, data, options);
  }
  public put(method: string, data: any, options?: any) {
    var url = this._generateUrl(method);
    return this.http.put(url, data, options);
  }
  public delete(method: string, options?: any) {
    var url = this._generateUrl(method);
    return this.http.delete(url, options);
  }
  private _generateUrl(method: string): string {
    return this.constants.API_ENDPOINT + method;
  }
}
