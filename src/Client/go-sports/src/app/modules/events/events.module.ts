import { EventListComponent } from './components/event-list/event-list.component';
import { CoreModule } from './../../core/core.module';
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { eventRoutes } from './events.routing';

@NgModule({
  imports: [CommonModule, RouterModule.forChild(eventRoutes), CoreModule],
  exports: [],
  declarations: [EventListComponent],
  providers: [],
})
export class EventsModule {}
