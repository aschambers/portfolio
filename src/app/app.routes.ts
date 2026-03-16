import { Routes } from '@angular/router';
import { AboutComponent } from './about/about.component';
import { DashboardComponent } from './dashboard/dashboard.component';

export const routes: Routes = [
  { path: '', component: AboutComponent },
  { path: 'projects', component: DashboardComponent },
];
