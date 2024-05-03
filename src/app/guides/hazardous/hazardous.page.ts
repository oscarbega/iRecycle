import { Component } from '@angular/core';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-hazardous',
  templateUrl: './hazardous.page.html',
  styleUrls: ['./hazardous.page.scss'],
})
export class HazardousPage {
  constructor(private navCtrl: NavController) {}

  returnPage() {
    this.navCtrl.back();
  }
}
