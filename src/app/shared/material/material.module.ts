import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MatSidenavModule } from '@angular/material/sidenav';
import { MatBadgeModule } from '@angular/material/badge';
import { MatIconModule } from '@angular/material/icon';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    MatSidenavModule,
    MatBadgeModule,
    MatIconModule,
    MatToolbarModule,
    MatButtonModule
  ],
  exports: [
    MatSidenavModule,
    MatBadgeModule,
    MatIconModule,
    MatToolbarModule,
    MatButtonModule
  ]
})
export class MaterialModule { }
