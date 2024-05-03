import { Component } from '@angular/core';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-organic',
  templateUrl: './organic.page.html',
  styleUrls: ['./organic.page.scss'],
})
export class OrganicPage {
  constructor(private navCtrl: NavController) {}

  returnPage() {
    this.navCtrl.back();
  }
}
