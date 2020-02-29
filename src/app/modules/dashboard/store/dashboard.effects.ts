import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { of } from 'rxjs';
import { catchError, map, mergeMap } from 'rxjs/operators';

import * as fromDashboard from './dashboard.actions';
import { DashboardService } from './dashboard.service';
import { DashboardItem } from './dashboard-item';

@Injectable()
export class DashboardEffects {
  getDashboardItems$ = createEffect(() =>
    this.actions$.pipe(
      ofType(fromDashboard.getDashboardItems),
      mergeMap(() =>
        this.dashboardService.getDashboardItems().pipe(
          map((items: DashboardItem[]) => fromDashboard.setDashboardItems({ items })),
          catchError((error: any) => of(fromDashboard.requestFailed({ error }))),
        ),
      ),
    ),
  );

  getDashboardItem$ = createEffect(() =>
    this.actions$.pipe(
      ofType(fromDashboard.getDashboardItem),
      mergeMap(({ id }) =>
        this.dashboardService.getDashboardItem(id).pipe(
          map((item: DashboardItem) => fromDashboard.setDashboardItem({ item })),
          catchError((error: any) => of(fromDashboard.requestFailed({ error }))),
        ),
      ),
    ),
  );

  constructor(
    private actions$: Actions,
    private dashboardService: DashboardService
  ) {}
}
