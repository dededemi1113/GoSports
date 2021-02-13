import { GameCardComponent } from './components/game-card/game-card.component';
import { SharedModule } from './../../shared/shared.module';
import { CoreModule } from './../../core/core.module';
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { GamesRoutingModule } from './games.routing';
import { GameListComponent } from './components/game-list/game-list.component';

@NgModule({
  imports: [CommonModule, CoreModule, SharedModule, GamesRoutingModule],
  exports: [GameListComponent, GameCardComponent],
  declarations: [GameListComponent, GameCardComponent],
  providers: [],
})
export class GamesModule {}
