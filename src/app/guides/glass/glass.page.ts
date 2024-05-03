import { Component } from '@angular/core';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-glass',
  templateUrl: './glass.page.html',
  styleUrls: ['./glass.page.scss'],
})
export class GlassPage {
  constructor(private navCtrl: NavController) {}

  returnPage() {
    this.navCtrl.back();
  }
}
