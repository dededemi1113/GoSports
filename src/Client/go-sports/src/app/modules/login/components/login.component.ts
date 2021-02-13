import { AuthService } from './../../../core/services/auth.service';
import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'gs-login',
  templateUrl: 'login.component.html',
  styleUrls: ['login.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class LoginComponent implements OnInit {
  error = '';
  constructor(private authSvc: AuthService, private router: Router) {}

  ngOnInit() {}

  onCodeSubmitted(code: string) {
    if (code.length !== 4) {
      this.error = 'Please input 4 digits';
      return;
    }
    this.error = '';
    this.authSvc.saveEmployeeCode(code);
    this.router.navigate(['home']);
  }
}
