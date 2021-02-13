import { AuthGuardService } from './../../core/services/auth-guard.service';
import { Routes } from '@angular/router';
import { EventListComponent } from './components/event-list/event-list.component';
import { HeaderFooterComponent } from 'src/app/core/layout/components/header-footer/header-footer.component';

export const eventRoutes: Routes = [
  {
    path: '',
    component: HeaderFooterComponent,
    children: [{ path: '', component: EventListComponent }],
    canActivate: [AuthGuardService],
  },
];
