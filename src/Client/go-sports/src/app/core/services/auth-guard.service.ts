import { AuthService } from './auth.service';
import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';

@Injectable({ providedIn: 'root' })
export class AuthGuardService implements CanActivate {
  constructor(private authSvc: AuthService, private router: Router) {}

  canActivate(): boolean {
    if (!this.authSvc.codeExist()) {
      this.router.navigate(['/login']);
      return false;
    }
    return true;
  }
}
