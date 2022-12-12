import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatIconModule } from '@angular/material/icon';

const allMaterialModules = [CommonModule, MatIconModule];

@NgModule({
  declarations: [],
  imports: [allMaterialModules],
  exports: [allMaterialModules],
})
export class MaterialModule {}
