import {Component, OnDestroy, OnInit} from '@angular/core';
import {Observable, Subject} from 'rxjs';
import {DashboardItem} from '../store/dashboard-item';
import {select, Store} from '@ngrx/store';
import {DashboardState} from '../store/dashboard.reducer';
import {getDashboardItem, getDashboardItems} from '../store/dashboard.actions';
import {selectDashboardItem} from '../store/dashboard.selectors';
import {ActivatedRoute, Params} from '@angular/router';
import {takeUntil} from 'rxjs/operators';

@Component({
  selector: 'app-dashboard-detail',
  templateUrl: './dashboard-detail.component.html',
  styleUrls: ['./dashboard-detail.component.scss']
})
export class DashboardDetailComponent implements OnInit, OnDestroy {

  dashboardItem: DashboardItem;

  private destroy$: Subject<any> = new Subject();

  constructor(private store: Store<DashboardState>,
              private activatedRoute: ActivatedRoute) { }

  ngOnInit() {
    this.activatedRoute.params.subscribe((params: Params) => {
      if ('id' in params) {
        this.store.dispatch(getDashboardItem({ id: +params.id }));
      }
    });
    this.store.pipe(
      select(selectDashboardItem),
      takeUntil(this.destroy$)
    ).subscribe((dashboardItem: DashboardItem) => this.dashboardItem = dashboardItem);
  }

  ngOnDestroy(): void {
    this.destroy$.next();
    this.destroy$.complete();
  }

}
