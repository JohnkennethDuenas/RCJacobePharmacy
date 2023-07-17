import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { FormsModule } from '@angular/forms';
import { DashboardPage } from '../dashboard/dashboard.page';

import { HomePageRoutingModule } from './dashboard-routing.module';


@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    HomePageRoutingModule
  ],
  declarations: [DashboardPage]
})
export class DashboardPageModule {}
