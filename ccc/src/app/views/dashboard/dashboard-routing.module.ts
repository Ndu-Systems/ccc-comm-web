
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DashboardComponent } from './dashboard.component';
import { DashboardHomeComponent } from './dashboard-home/dashboard-home.component';
import { DashNavigationComponent } from './dash-navigation/dash-navigation.component';
import { TakingSelftestComponent } from './taking-selftest/taking-selftest.component';
import { AuthGuard } from 'src/app/_guards';


const routes: Routes = [
  {
    path: '', component: DashboardComponent, canActivate: [AuthGuard],
    children: [
      { path: '', component: TakingSelftestComponent },
      // { path: '', component: DashboardHomeComponent },

    ]
  }
];

export const declarations = [
  DashboardComponent,
  DashboardHomeComponent,
  DashNavigationComponent,
  TakingSelftestComponent
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DashboardRoutingModule { }
