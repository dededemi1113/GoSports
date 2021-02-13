import { AuthGuardService } from './../../core/services/auth-guard.service';
import { Routes } from '@angular/router';
import { HomeComponent } from './components/home.component';

export const homeRoutes: Routes = [
  {
    path: '',
    component: HomeComponent,
    canActivate: [AuthGuardService],
  },
];
