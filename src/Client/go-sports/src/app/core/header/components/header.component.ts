import { AuthService } from './../../services/auth.service';
import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'gs-header',
  templateUrl: 'header.component.html',
  styleUrls: ['header.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class HeaderComponent implements OnInit {
  navbarOpen = false;
  employeeCode: string | null = '';
  path = '';
  constructor(private authSvc: AuthService, private router: Router) {
    this.employeeCode = authSvc.getEmployeeCode();
    this.path = router.url;
    console.log(this.path);
  }

  ngOnInit() {}
  toggleNavbar() {
    this.navbarOpen = !this.navbarOpen;
  }
}
