import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FooterOnlyComponent } from 'src/app/core/layout/components/footer-only/footer-only.component';
import { LoginComponent } from './components/login.component';

export const loginRoutes: Routes = [
  {
    path: '',
    component: FooterOnlyComponent,
    children: [{ path: '', component: LoginComponent }],
  },
];
@NgModule({
  imports: [RouterModule.forChild(loginRoutes)],
  exports: [RouterModule],
})
export class LoginRoutingModule {}
