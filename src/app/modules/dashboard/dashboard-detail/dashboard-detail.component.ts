import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { select, Store } from '@ngrx/store';
import { takeUntil } from 'rxjs/operators';
import { Subject } from 'rxjs';

import { DashboardItem } from '../store/dashboard-item';
import { DashboardState } from '../store/dashboard.reducer';
import { getDashboardItem, setDashboardItem } from '../store/dashboard.actions';
import { selectDashboardItem, selectDashboardItems } from '../store/dashboard.selectors';

@Component({
  selector: 'app-dashboard-detail',
  templateUrl: './dashboard-detail.component.html',
  styleUrls: ['./dashboard-detail.component.scss']
})
export class DashboardDetailComponent implements OnInit, OnDestroy {

  dashboardItem: DashboardItem;

  private destroy$: Subject<any> = new Subject();
  private userId: number;

  constructor(private store: Store<DashboardState>,
              private activatedRoute: ActivatedRoute) { }

  ngOnInit() {
    this.activatedRoute.params.subscribe((params: Params) => {
      if ('id' in params) {
        this.userId = +params.id;
      }
    });
    this.store.pipe(
      select(selectDashboardItem),
      takeUntil(this.destroy$)
    ).subscribe((dashboardItem: DashboardItem) => this.dashboardItem = dashboardItem);
    this.store.pipe(
      select(selectDashboardItems),
      takeUntil(this.destroy$)
    ).subscribe((dashboardItems: DashboardItem[]) => {
      dashboardItems.length
        ? this.store.dispatch(setDashboardItem({
          item: dashboardItems.find((item: DashboardItem) => item.id === this.userId),
        }))
        : this.store.dispatch(getDashboardItem({ id: this.userId }));
    });
  }

  ngOnDestroy(): void {
    this.destroy$.next();
    this.destroy$.complete();
  }

}
