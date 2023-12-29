import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MatSidenavModule } from '@angular/material/sidenav';
import { MatBadgeModule } from '@angular/material/badge';
import { MatIconModule } from '@angular/material/icon';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatInputModule } from '@angular/material/input';
import { MatChipsModule } from '@angular/material/chips';
import { MatCardModule } from '@angular/material/card';
import { MatStepperModule } from '@angular/material/stepper';
import { MatTooltipModule } from '@angular/material/tooltip';
import { MatDividerModule } from '@angular/material/divider';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatRadioModule } from '@angular/material/radio';


@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    MatSidenavModule,
    MatBadgeModule,
    MatIconModule,
    MatToolbarModule,
    MatButtonModule,
    MatInputModule,
    MatChipsModule,
    MatCardModule,
    MatStepperModule,
    MatTooltipModule,
    MatDividerModule,
    MatCheckboxModule,
    MatRadioModule
  ],
  exports: [
    MatSidenavModule,
    MatBadgeModule,
    MatIconModule,
    MatToolbarModule,
    MatButtonModule,
    MatInputModule,
    MatChipsModule,
    MatCardModule,
    MatStepperModule,
    MatTooltipModule,
    MatDividerModule,
    MatCheckboxModule,
    MatRadioModule
  ]
})
export class MaterialModule { }
