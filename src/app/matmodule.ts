import { NgModule } from '@angular/core';

import { MatButtonModule } from '@angular/material/button';
import { MatInputModule } from '@angular/material/input';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { MatIconModule } from '@angular/material/icon';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatTabsModule } from '@angular/material/tabs';
import { FlexLayoutModule } from '@angular/flex-layout';
import { NgxMaterialTimepickerModule } from 'ngx-material-timepicker';


const importsExports = [
  MatButtonModule,
  MatInputModule,
  MatSnackBarModule,
  MatIconModule,
  MatFormFieldModule,
  MatTabsModule,
  FlexLayoutModule,
  NgxMaterialTimepickerModule
];

@NgModule({
  imports: importsExports,
  exports: importsExports
})
export class MatModule { }
