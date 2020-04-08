
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DashboardComponent } from './dashboard.component';
import { DashNavigationComponent } from './dash-navigation/dash-navigation.component';
import { TakingSelftestComponent } from './taking-selftest/taking-selftest.component';
import { AuthGuard } from 'src/app/_guards';
import { PersonalDetailsComponent } from './taking-selftest/personal-details/personal-details.component';
import { DashboardHomeComponent, PieChartComponent } from './dashboard-home';
import { QuickStatsComponent } from './dashboard-home/quick-stats';
import { TestResultComponent } from './taking-selftest/test-result/test-result.component';
import { BreadCrumpComponent } from './dash-navigation/bread-crump';
import { PatientsComponent, AddPatientComponent } from './patients';
import { ConfigurationHomeComponent } from './configuration-home';
import { QuestionsComponent, AddQuestionComponent } from './questions';
import { ActionsComponent, TableDataComponent } from './shared';
import { ViewTestsComponent } from './taking-selftest/view-tests/view-tests.component';
import { FilterStatusPipe } from 'src/app/_pipes/filter-status.pipe';
import { MyViewTestsComponent } from './taking-selftest/my-view-tests/my-view-tests.component';


const routes: Routes = [
  {
    path: '', component: DashboardComponent, canActivate: [AuthGuard],
    children: [
      { path: '', component: DashboardHomeComponent },
      { path: 'test', component: TakingSelftestComponent },
      { path: 'test-results', component: TestResultComponent },
      { path: 'patients', component: PatientsComponent },
      { path: 'add-patient', component: AddPatientComponent },
      { path: 'configurations', component: ConfigurationHomeComponent },
      { path: 'questions', component: QuestionsComponent },
      { path: 'add-question', component: AddQuestionComponent },
      { path: 'view-tests', component: ViewTestsComponent },
      { path: 'my-view-tests', component: MyViewTestsComponent },
    ]
  }
];

export const declarations = [
  DashboardComponent,
  DashboardHomeComponent,
  DashNavigationComponent,
  TakingSelftestComponent,
  PersonalDetailsComponent,
  QuickStatsComponent,
  BreadCrumpComponent,
  TestResultComponent,
  PieChartComponent,
  TableDataComponent,
  PatientsComponent,
  AddPatientComponent,
  ConfigurationHomeComponent,
  QuestionsComponent,
  AddQuestionComponent,
  ActionsComponent,
  ViewTestsComponent,
  FilterStatusPipe,
  MyViewTestsComponent

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DashboardRoutingModule { }
