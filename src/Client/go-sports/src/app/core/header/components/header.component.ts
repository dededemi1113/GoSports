import { AuthService } from './../../services/auth.service';
import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { GamesService } from '../../services/games.service';

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
  game: any = null;
  constructor(private authSvc: AuthService, private router: Router) {
    this.employeeCode = this.authSvc.getEmployeeCode();
    this.path = this.router.url;
  }

  ngOnInit() {}
  toggleNavbar() {
    this.navbarOpen = !this.navbarOpen;
  }
}
