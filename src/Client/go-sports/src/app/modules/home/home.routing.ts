import { AuthGuardService } from './../../core/services/auth-guard.service';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home.component';
import { NgModule } from '@angular/core';
import { HeaderFooterComponent } from 'src/app/core/layout/components/header-footer/header-footer.component';

export const homeRoutes: Routes = [
  {
    path: '',
    component: HeaderFooterComponent,
    children: [{ path: '', component: HomeComponent }],
    canActivate: [AuthGuardService],
  },
];

@NgModule({
  imports: [RouterModule.forChild(homeRoutes)],
  exports: [RouterModule],
})
export class HomeRoutingModule {}
