import { SharedModule } from './../../shared/shared.module';
import { loginRoutes, LoginRoutingModule } from './login.routing';
import { CoreModule } from './../../core/core.module';
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { LoginComponent } from './components/login.component';

@NgModule({
  imports: [CommonModule, LoginRoutingModule, CoreModule, SharedModule],
  exports: [],
  declarations: [LoginComponent],
  providers: [],
})
export class LoginModule {}
