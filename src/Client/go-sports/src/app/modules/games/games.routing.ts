import { AuthGuardService } from './../../core/services/auth-guard.service';
import { RouterModule, Routes } from '@angular/router';
import { HeaderFooterComponent } from 'src/app/core/layout/components/header-footer/header-footer.component';
import { GameListComponent } from './components/game-list/game-list.component';
import { NgModule } from '@angular/core';

export const gameRoutes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    component: HeaderFooterComponent,
    children: [{ path: '', component: GameListComponent }],
    canActivate: [AuthGuardService],
  },
];
@NgModule({
  imports: [RouterModule.forChild(gameRoutes)],
  exports: [RouterModule],
})
export class GamesRoutingModule {}
