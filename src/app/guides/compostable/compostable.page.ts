import { Component } from '@angular/core';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-compostable',
  templateUrl: './compostable.page.html',
  styleUrls: ['./compostable.page.scss'],
})
export class CompostablePage {
  constructor(private navCtrl: NavController) {}

  returnPage() {
    this.navCtrl.back();
  }
}
