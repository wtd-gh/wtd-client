import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { LoginComponent } from './components/login/login.component';
import { CreateacComponent } from './components/createac/createac.component';
import { AnonymusGuard } from './guards/anonymus.guard';
import { AuthGuard } from './guards/auth.guard';


const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
    canActivate: [AnonymusGuard]
  },
  {
    path: 'signin',
    component: LoginComponent,
    canActivate: [AnonymusGuard]
  },
  {
    path: 'signup',
    component: CreateacComponent,
    canActivate: [AnonymusGuard]
  },
  {
    path: 'home',
    loadChildren: './wtd/wtd.module#WtdModule',
    canActivate: [AuthGuard]
  },
  {
    path: '**',
    redirectTo: '/'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
