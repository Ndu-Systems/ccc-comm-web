
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DashboardComponent } from './dashboard.component';
import { DashboardHomeComponent } from './dashboard-home/dashboard-home.component';
import { DashNavigationComponent } from './dash-navigation/dash-navigation.component';
import { TakingSelftestComponent } from './taking-selftest/taking-selftest.component';
import { AuthGuard } from 'src/app/_guards';
import { PersonalDetailsComponent } from './taking-selftest/personal-details/personal-details.component';
import { TestResultComponent } from './taking-selftest/test-result/test-result.component';


const routes: Routes = [
  {
    path: '', component: DashboardComponent, canActivate: [AuthGuard],
    children: [
      { path: '', component: TakingSelftestComponent },
      { path: 'test-results', component: TestResultComponent },
      // { path: '', component: DashboardHomeComponent },

    ]
  }
];

export const declarations = [
  DashboardComponent,
  DashboardHomeComponent,
  DashNavigationComponent,
  TakingSelftestComponent,
  PersonalDetailsComponent,
  TestResultComponent
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DashboardRoutingModule { }
