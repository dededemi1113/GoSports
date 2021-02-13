import { SharedModule } from './../../shared/shared.module';
import { GamesService } from './../../core/services/games.service';
import { CoreModule } from './../../core/core.module';
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { gameRoutes } from './games.routing';
import { GameListComponent } from './components/game-list/game-list.component';

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(gameRoutes),
    CoreModule,
    SharedModule,
  ],
  exports: [GameListComponent],
  declarations: [GameListComponent],
  providers: [],
})
export class GamesModule {}
