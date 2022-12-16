import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PortalModule } from '@angular/cdk/portal';

import { SnackBarComponent } from './snackbar.component';
import { MaterialModule } from '../../../modules/material-module/material.module';

@NgModule({
  imports: [CommonModule, PortalModule, MaterialModule],
  declarations: [SnackBarComponent],
  exports: [SnackBarComponent],
})
export class SnackBarComponentModule {}
