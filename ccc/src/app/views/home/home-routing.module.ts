import { Routes, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { IndexComponent } from './index/index.component';
import { HomeComponent } from './home.component';
import { SolutionHomeComponent } from './index/solution-home';
import { BannerHomeComponent } from './index/banner-home';
import { HomeNavComponent } from './home-nav';
import { SelectHomeComponent } from './index/select-home';
import { FooterHomeComponent } from './footer-home';

const routes: Routes = [
  {
    path: '', component: HomeComponent,
    children: [
      { path: '', component: IndexComponent }
    ]
  },
];
export const Declarations = [
  IndexComponent,
  HomeComponent,
  SolutionHomeComponent,
  BannerHomeComponent,
  HomeNavComponent,
  SelectHomeComponent,
  FooterHomeComponent
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})

export class HomeRoutingModule { }
