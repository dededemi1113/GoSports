import { FooterComponent } from './footer/components/footer.component';
import { HeaderComponent } from './header/components/header.component';
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

@NgModule({
  imports: [CommonModule],
  exports: [HeaderComponent, FooterComponent],
  declarations: [HeaderComponent, FooterComponent],
  providers: [],
})
export class CoreModule {}
