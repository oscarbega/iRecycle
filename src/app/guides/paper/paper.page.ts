import { Component } from '@angular/core';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-paper',
  templateUrl: './paper.page.html',
  styleUrls: ['./paper.page.scss'],
})
export class PaperPage {
  constructor(private navCtrl: NavController) {}

  returnPage() {
    this.navCtrl.back();
  }
}
