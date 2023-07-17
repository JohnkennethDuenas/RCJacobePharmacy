import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-dashboard',
  templateUrl: 'dashboard.page.html',
  styleUrls: ['dashboard.page.scss'],
})
export class DashboardPage {
  temperature: number;
  humidity: number;

  constructor(private router: Router) {
    this.temperature = 25;
    this.humidity = 60;
  }

  getTemperatureColorClass() {
    if (this.temperature >= 30) {
      return 'temperature-very-high';
    } else if (this.temperature >= 26) {
      return 'temperature-high';
    } else {
      return 'temperature-normal';
    }
  }

  getHumidityColorClass() {
    if (this.humidity >= 80) {
      return 'humidity-very-high';
    } else if (this.humidity >= 61) {
      return 'humidity-high';
    } else {
      return 'humidity-normal';
    }
  }

  goToHomePage() {
    this.router.navigateByUrl('/home');
  }
}



