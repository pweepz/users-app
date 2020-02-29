import { Action, createReducer, on } from '@ngrx/store';

import * as fromDashboard from './dashboard.actions';
import {DashboardItem} from './dashboard-item';

export const dashboardFeatureKey = 'dashboard';

export interface DashboardState {
  items: DashboardItem[];
  isLoading: boolean;
  item: DashboardItem;
}

const initialState: DashboardState = {
  items: [],
  isLoading: false,
  item: null,
};

export const dashboardReducer = createReducer(
  initialState,
  on(
    fromDashboard.getDashboardItems,
    fromDashboard.getDashboardItem,
    (state: DashboardState) => ({
      ...state,
      isLoading: true,
    })),
  on(fromDashboard.setDashboardItems, (state: DashboardState, { items }) => ({
    ...state,
    items,
    isLoading: false,
  })),
  /*on(fromDashboard.setDashboardItem, (state: DashboardState, { item }) => ({
    ...state,
    item,
    isLoading: false,
  })),*/
  on(fromDashboard.setDashboardItem, (state: DashboardState, { item }) => {
    console.log('item: ', item);
    return {
    ...state,
    item,
    isLoading: false,
  }}),
  on(fromDashboard.requestFailed, (state: DashboardState) => ({
    ...state,
    isLoading: false,
  })),
);

export function reducer(state: DashboardState | undefined, action: Action) {
  return dashboardReducer(state, action);
}
