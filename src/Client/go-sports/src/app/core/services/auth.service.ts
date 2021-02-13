import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private readonly _key = 'GS_EMPLOYEE_CODE';
  public getEmployeeCode(): string | null {
    const code = localStorage.getItem(this._key);
    return code;
  }
  public codeExist(): boolean {
    const code = this.getEmployeeCode();
    return code != null;
  }
  public saveEmployeeCode(code: string): void {
    localStorage.setItem(this._key, code);
  }
}
