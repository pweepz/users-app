import { createAction, props } from '@ngrx/store';

import { DashboardItem } from './dashboard-item';

export const getDashboardItems = createAction(
  '[Dashboard] Get Dashboard Items'
);

export const setDashboardItems = createAction(
  '[Dashboard] Set Dashboard Items',
  props<{ items: DashboardItem[] }>(),
);

export const getDashboardItem = createAction(
  '[Dashboard] Get Dashboard Item',
  props<{ id: number }>()
);

export const setDashboardItem = createAction(
  '[Dashboard] Set Dashboard Item',
  props<{ item: DashboardItem }>()
);

export const requestFailed = createAction(
  '[Dashboard] Request Failed',
  props<{ error: any }>()
);
