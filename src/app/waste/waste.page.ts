import { Component } from '@angular/core';
import { NavController } from '@ionic/angular';
import { Router } from '@angular/router';

@Component({
  selector: 'app-waste',
  templateUrl: './waste.page.html',
  styleUrls: ['./waste.page.scss'],
})
export class WastePage {
  constructor(private router: Router, private navCtrl: NavController) {}

  returnPage() {
    this.navCtrl.back();
  }
  openNewPage(page: string) {
    this.router.navigate(['/', page]);
  }
}
