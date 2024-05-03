import { Component } from '@angular/core';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-plastic',
  templateUrl: './plastic.page.html',
  styleUrls: ['./plastic.page.scss'],
})
export class PlasticPage {
  constructor(private navCtrl: NavController) {}

  returnPage() {
    this.navCtrl.back();
  }
}
