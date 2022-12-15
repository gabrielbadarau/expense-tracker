import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { PortalModule } from '@angular/cdk/portal';
import { MatTableModule } from '@angular/material/table';
import { MatSelectModule } from '@angular/material/select';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';
import { MatMomentDateModule } from '@angular/material-moment-adapter';

const allMaterialModules = [
  CommonModule,
  MatIconModule,
  MatButtonModule,
  MatFormFieldModule,
  MatInputModule,
  MatCheckboxModule,
  PortalModule,
  MatTableModule,
  MatSelectModule,
  MatDatepickerModule,
  MatNativeDateModule,
  MatMomentDateModule,
];

@NgModule({
  declarations: [],
  imports: [allMaterialModules],
  exports: [allMaterialModules],
})
export class MaterialModule {}
