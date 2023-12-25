
import { CommonModule } from '@angular/common';
import { MaterialModule } from './material/material.module';
import { NgModule } from '@angular/core';
import { CdkStepperModule } from '@angular/cdk/stepper';



@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    MaterialModule,
    CdkStepperModule
  ],
  exports: [
    MaterialModule,
    CdkStepperModule
  ]
})
export class SharedModule { }
