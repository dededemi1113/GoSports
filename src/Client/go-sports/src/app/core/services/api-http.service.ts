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
  public get(
    method: string,
    params?: { key: string; value: string }[],
    options?: any
  ) {
    let url = this._generateUrl(method);
    url = this._generateUrlParameters(url, params);
    return this.http.get(url, options);
  }
  public post(method: string, data: any, options?: any) {
    const url = this._generateUrl(method);
    return this.http.post(url, data, options);
  }
  public put(method: string, data: any, options?: any) {
    const url = this._generateUrl(method);
    return this.http.put(url, data, options);
  }
  public delete(method: string, options?: any) {
    const url = this._generateUrl(method);
    return this.http.delete(url, options);
  }
  private _generateUrl(method: string): string {
    return this.constants.API_ENDPOINT + method;
  }
  private _generateUrlParameters(
    url: string,
    params?: { key: string; value: string }[]
  ): string {
    if (!params) {
      return url;
    }
    url += '?';
    params.forEach((prm, index) => {
      url += prm.key + '=' + encodeURI(prm.value);
      if (index < params.length - 1) {
        url += '&';
      }
    });
    return url;
  }
}
