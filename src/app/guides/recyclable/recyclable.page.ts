import { Component } from '@angular/core';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-recyclable',
  templateUrl: './recyclable.page.html',
  styleUrls: ['./recyclable.page.scss'],
})
export class RecyclablePage {
  constructor(private navCtrl: NavController) {}

  returnPage() {
    this.navCtrl.back();
  }
}
