import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';


import { DashboardComponent } from './screens/dashboard/dashboard.component';


import { LoginComponent } from './sample-pages/login/login.component';
import { RegisterComponent } from './sample-pages/register/register.component';
import { Page404Component } from './sample-pages/page404/page404.component';
import { Page500Component } from './sample-pages/page500/page500.component';

const routes: Routes = [
  { path: '', redirectTo: '/dashboard', pathMatch: 'full' },
  { path: 'dashboard', component: DashboardComponent },
  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegisterComponent },
  { path: '404-page', component: Page404Component },
  { path: '500-page', component: Page500Component },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
