import { AuthGuardService } from './../../core/services/auth-guard.service';
import { Routes } from '@angular/router';
import { HeaderFooterComponent } from 'src/app/core/layout/components/header-footer/header-footer.component';
import { GameListComponent } from './components/game-list/game-list.component';

export const gameRoutes: Routes = [
  {
    path: '',
    component: HeaderFooterComponent,
    children: [{ path: '', component: GameListComponent }],
    canActivate: [AuthGuardService],
  },
];
