import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';
@Component({
  selector: 'app-loader',
  templateUrl: './loader.page.html',
  styleUrls: ['./loader.page.scss'],
})
export class LoaderPage implements OnInit {

  constructor(protected nav: NavController) { }

  ngOnInit() {
    setTimeout(() => {
      this.nav.navigateForward('/login');
    }, 1000);
  }

}
