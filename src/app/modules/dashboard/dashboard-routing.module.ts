import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DashboardListComponent } from './dashboard-list/dashboard-list.component';
import { DashboardDetailComponent } from './dashboard-detail/dashboard-detail.component';


const routes: Routes = [
  { path: '', component: DashboardListComponent },
  { path: ':id', component: DashboardDetailComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DashboardRoutingModule { }
