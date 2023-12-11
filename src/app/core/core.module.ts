import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { SharedModule } from '../shared/shared.module';
import { SideNavMenuComponent } from './side-nav-menu/side-nav-menu.component';
import { RouterModule } from '@angular/router';



@NgModule({
  declarations: [
    HeaderComponent,
    FooterComponent,
    SideNavMenuComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    RouterModule
  ],
  exports: [
    HeaderComponent,
    FooterComponent,
    SideNavMenuComponent
  ]
})
export class CoreModule { }
