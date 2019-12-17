import { NgModule } from '@angular/core';

import { MatButtonModule } from '@angular/material/button';
import { MatInputModule } from '@angular/material/input';
import { MatDialogModule } from '@angular/material/dialog';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { MatTooltipModule } from '@angular/material/tooltip';
import { MatIconModule } from '@angular/material/icon';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { MatTabsModule } from '@angular/material/tabs';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatListModule } from '@angular/material/list';
import { MatMenuModule } from '@angular/material/menu';
import { MatChipsModule } from '@angular/material/chips';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { MatDividerModule } from '@angular/material/divider';
import { MatCardModule } from '@angular/material/card';
import { MatButtonToggleModule } from '@angular/material/button-toggle';
import { NgxMaterialTimepickerModule } from 'ngx-material-timepicker';
import { MatStepperModule } from '@angular/material/stepper';
import { MatBadgeModule } from '@angular/material/badge';

const importsExports = [
  MatButtonModule,
  MatInputModule,
  MatDialogModule,
  MatSnackBarModule,
  MatTooltipModule,
  MatIconModule,
  MatBadgeModule,
  MatSidenavModule,
  MatFormFieldModule,
  MatMenuModule,
  MatDatepickerModule,
  MatSlideToggleModule,
  MatTabsModule,
  FlexLayoutModule,
  MatToolbarModule,
  MatListModule,
  MatChipsModule,
  MatProgressSpinnerModule,
  MatProgressBarModule,
  MatDividerModule,
  MatCardModule,
  MatButtonToggleModule,
  MatStepperModule,
  NgxMaterialTimepickerModule
];

@NgModule({
  imports: importsExports,
  exports: importsExports
})
export class MatModule { }
