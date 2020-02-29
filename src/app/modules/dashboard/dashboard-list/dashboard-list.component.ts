import { Component, OnInit } from '@angular/core';

import { DashboardService } from '../store/dashboard.service';
import {select, Store} from '@ngrx/store';
import {DashboardState} from '../store/dashboard.reducer';
import {getDashboardItem, getDashboardItems} from '../store/dashboard.actions';
import {selectDashboardItems} from '../store/dashboard.selectors';
import {Observable} from 'rxjs';
import {DashboardItem} from '../store/dashboard-item';

@Component({
  selector: 'app-dashboard-list',
  templateUrl: './dashboard-list.component.html',
  styleUrls: ['./dashboard-list.component.scss']
})
export class DashboardListComponent implements OnInit {

  dashboardItems$: Observable<DashboardItem[]>;
  displayedColumns: string[] = ['name', 'email'];

  constructor(private store: Store<DashboardState>) { }

  ngOnInit() {
    this.store.dispatch(getDashboardItems());
    this.dashboardItems$ = this.store.pipe(select(selectDashboardItems));
  }
}
