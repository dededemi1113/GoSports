import { RouterModule } from '@angular/router';
import { FooterOnlyComponent } from './layout/components/footer-only/footer-only.component';
import { FooterComponent } from './footer/components/footer.component';
import { HeaderComponent } from './header/components/header.component';
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { HeaderFooterComponent } from './layout/components/header-footer/header-footer.component';

@NgModule({
  imports: [CommonModule, RouterModule],
  exports: [
    HeaderComponent,
    FooterComponent,
    FooterOnlyComponent,
    HeaderFooterComponent,
  ],
  declarations: [
    HeaderComponent,
    FooterComponent,
    FooterOnlyComponent,
    HeaderFooterComponent,
  ],
  providers: [],
})
export class CoreModule {}
