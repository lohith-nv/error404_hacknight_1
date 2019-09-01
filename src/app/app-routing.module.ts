import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { EmployeeListComponent } from './employee-list/employee-list.component';
import { AnalyticsComponent } from './analytics/analytics.component';
import { ActivitiesComponent } from './activities/activities.component';
import { HomeComponent } from './home/home.component';

const routes: Routes = [
  { path: 'approvals', component: EmployeeListComponent },
  { path: 'home', component: HomeComponent },
  { path: 'analysis', component: AnalyticsComponent },
  { path: 'activities', component: ActivitiesComponent },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
