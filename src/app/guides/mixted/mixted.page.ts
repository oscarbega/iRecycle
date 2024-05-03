import { Component } from '@angular/core';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-mixted',
  templateUrl: './mixted.page.html',
  styleUrls: ['./mixted.page.scss'],
})
export class MixtedPage {
  constructor(private navCtrl: NavController) {}

  returnPage() {
    this.navCtrl.back();
  }
}
