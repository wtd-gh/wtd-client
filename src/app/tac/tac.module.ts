import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TosComponent } from './tos/tos.component';
import { PolicyComponent } from './policy/policy.component';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  { path: 'terms_of_services', component: TosComponent },
  { path: 'privacy_policy', component: PolicyComponent }
];

@NgModule({
  declarations: [TosComponent, PolicyComponent],
  imports: [CommonModule, RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TacModule {}
