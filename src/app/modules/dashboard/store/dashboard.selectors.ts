import { createFeatureSelector, createSelector } from '@ngrx/store';

import * as fromDashboard from './dashboard.reducer';

export const selectDashboard = createFeatureSelector<fromDashboard.DashboardState>(fromDashboard.dashboardFeatureKey);

export const selectDashboardItems = createSelector(
  selectDashboard,
  (state: fromDashboard.DashboardState) => state.items,
);

export const selectJobsLoadingState = createSelector(
  selectDashboard,
  (state: fromDashboard.DashboardState) => state.isLoading,
);

export const selectDashboardItem = createSelector(
  selectDashboard,
  (state: fromDashboard.DashboardState) => state.item,
);
