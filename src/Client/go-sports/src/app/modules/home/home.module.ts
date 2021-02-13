import { CoreModule } from './../../core/core.module';
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { HomeComponent } from './components/home.component';
import { homeRoutes } from './home.routing';

@NgModule({
  imports: [CommonModule, RouterModule.forChild(homeRoutes), CoreModule],
  exports: [],
  declarations: [HomeComponent],
  providers: [],
})
export class HomeModule {}
