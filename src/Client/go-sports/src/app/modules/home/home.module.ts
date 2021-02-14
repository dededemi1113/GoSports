import { EventsModule } from './../events/events.module';
import { GamesModule } from './../games/games.module';
import { CoreModule } from './../../core/core.module';
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { HomeComponent } from './components/home.component';
import { HomeRoutingModule } from './home.routing';

@NgModule({
  imports: [
    CommonModule,
    HomeRoutingModule,
    CoreModule,
    GamesModule,
    EventsModule,
  ],
  exports: [],
  declarations: [HomeComponent],
  providers: [],
})
export class HomeModule {}
