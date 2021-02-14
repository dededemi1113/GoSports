import { SharedModule } from './../../shared/shared.module';
import { EventFieldTeamScoresComponent } from './components/event-field/event-field-team-scores/event-field-team-scores.component';
import { EventFieldSelectComponent } from './components/event-field/event-field-select/event-field-select.component';
import { EventFieldTextComponent } from './components/event-field/event-field-text/event-field-text.component';
import { EventFieldComponent } from './components/event-field/event-field.component';
import { GamesModule } from './../games/games.module';
import { EventListComponent } from './components/event-list/event-list.component';
import { CoreModule } from './../../core/core.module';
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { EventsRoutingModule } from './events.routing';
import { EventEditorComponent } from './components/event-editor/event-editor.component';
import { EventFieldRefereeComponent } from './components/event-field/event-field-referee/event-field-referee.component';
import { EventFieldPlayerComponent } from './components/event-field/event-field-player/event-field-player.component';
import { EventFieldNumberComponent } from './components/event-field/event-field-number/event-field-number.component';
import { FieldValuePipe } from './pipes/event-field.pipe';
import { EventCardComponent } from './components/event-card/event-card.component';
import { EventFieldService } from './services/event-field.service';

@NgModule({
  imports: [
    CommonModule,
    EventsRoutingModule,
    CoreModule,
    GamesModule,
    SharedModule,
  ],
  exports: [FieldValuePipe, EventCardComponent],
  declarations: [
    EventListComponent,
    EventEditorComponent,
    EventFieldComponent,
    EventFieldTextComponent,
    EventFieldSelectComponent,
    EventFieldRefereeComponent,
    EventFieldPlayerComponent,
    EventFieldNumberComponent,
    EventFieldTeamScoresComponent,
    FieldValuePipe,
    EventCardComponent,
  ],
  providers: [EventFieldService],
})
export class EventsModule {}
