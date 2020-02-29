import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DashboardRoutingModule } from './dashboard-routing.module';
import { DashboardListComponent } from './dashboard-list/dashboard-list.component';
import { DashboardDetailComponent } from './dashboard-detail/dashboard-detail.component';
import { EffectsModule } from '@ngrx/effects';
import { StoreModule } from '@ngrx/store';

import * as fromDashboardReducer from './store/dashboard.reducer';
import { DashboardEffects } from './store/dashboard.effects';
import { MatCardModule, MatIconModule, MatTableModule } from '@angular/material';


@NgModule({
  declarations: [DashboardListComponent, DashboardDetailComponent],
  imports: [
    CommonModule,
    DashboardRoutingModule,
    MatTableModule,
    MatCardModule,
    StoreModule.forFeature(fromDashboardReducer.dashboardFeatureKey, fromDashboardReducer.reducer),
    EffectsModule.forFeature([DashboardEffects]),
    MatIconModule
  ]
})
export class DashboardModule { }
