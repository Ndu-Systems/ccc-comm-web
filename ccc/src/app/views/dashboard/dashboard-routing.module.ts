
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DashboardComponent } from './dashboard.component';
import { DashNavigationComponent } from './dash-navigation/dash-navigation.component';
import { TakingSelftestComponent } from './taking-selftest/taking-selftest.component';
import { AuthGuard } from 'src/app/_guards';
import { PersonalDetailsComponent } from './taking-selftest/personal-details/personal-details.component';
import { DashboardHomeComponent, PieChartComponent } from './dashboard-home';
import { BreadCrumpComponent } from './dash-navigation';
import { QuickStatsComponent } from './dashboard-home/quick-stats';
import { TestResultComponent } from './taking-selftest/test-result/test-result.component';
import { TableDataComponent } from './dashboard-home/table-data';
import { PatientsComponent } from './patients';


const routes: Routes = [
  {
    path: '', component: DashboardComponent, canActivate: [AuthGuard],
    children: [
      { path: '', component: DashboardHomeComponent },
      { path: 'test', component: TakingSelftestComponent },
      { path: 'test-results', component: TestResultComponent },
      { path: 'patients', component: PatientsComponent }
    ]
  }
];

export const declarations = [
  DashboardComponent,
  DashboardHomeComponent,
  DashNavigationComponent,
  TakingSelftestComponent,
  PersonalDetailsComponent,
  BreadCrumpComponent,
  QuickStatsComponent,
  TestResultComponent,
  PieChartComponent,
  TableDataComponent,
  PatientsComponent

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DashboardRoutingModule { }
