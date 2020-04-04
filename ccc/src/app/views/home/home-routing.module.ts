import { Routes, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { IndexComponent } from './index/index.component';
import { HomeComponent } from './home.component';
import { HomeNavComponent } from './home-nav';
import { BannerHomeComponent } from './index/banner-home';

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
  HomeNavComponent,
  BannerHomeComponent
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})

export class HomeRoutingModule { }
