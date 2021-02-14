import { GamesModule } from './../games/games.module';
import { EventListComponent } from './components/event-list/event-list.component';
import { CoreModule } from './../../core/core.module';
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { EventsRoutingModule } from './events.routing';
import { EventEditorComponent } from './components/event-editor/event-editor.component';

@NgModule({
  imports: [CommonModule, EventsRoutingModule, CoreModule, GamesModule],
  exports: [],
  declarations: [EventListComponent, EventEditorComponent],
  providers: [],
})
export class EventsModule {}
