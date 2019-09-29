import { NgModule } from '@angular/core';
import { ButtonModule } from 'primeng/button';
import { CardModule } from 'primeng/card';
import { PasswordModule } from 'primeng/password';
import { InputTextModule } from 'primeng/inputtext';
import { SidebarModule } from 'primeng/sidebar';
import { TabViewModule } from 'primeng/tabview';
import { SpinnerModule } from 'primeng/spinner';
import { InputTextareaModule } from 'primeng/inputtextarea';
import { CalendarModule } from 'primeng/calendar';
import { InputSwitchModule } from 'primeng/inputswitch';
import { SelectButtonModule } from 'primeng/selectbutton';

const importsExports = [
  ButtonModule,
  CardModule,
  InputTextModule,
  SidebarModule,
  PasswordModule,
  TabViewModule,
  SpinnerModule,
  InputTextareaModule,
  CalendarModule,
  InputSwitchModule,
  SelectButtonModule
];

@NgModule({
  imports: importsExports,
  exports: importsExports
})
export class PrimeModule {}
