import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { HomePage } from '../home/home.page';
import { DashboardPage } from './dashboard.page';

const routes: Routes = [
  {
    path: 'home',
    component: HomePage,
  },
  {
    path: '',
    component: DashboardPage,
  },
  {
    path: '',
    redirectTo: '/dashboard',
    pathMatch: 'full',
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class HomePageRoutingModule {}
