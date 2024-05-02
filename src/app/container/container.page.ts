import { Component } from '@angular/core';
import { NavController } from '@ionic/angular';
import { Router } from '@angular/router';

@Component({
  selector: 'app-container',
  templateUrl: './container.page.html',
  styleUrls: ['./container.page.scss'],
})
export class ContainerPage {
  constructor(private router: Router, private navCtrl: NavController) {}

  returnPage() {
    this.navCtrl.back();
  }
  openNewPage(page: string) {
    this.router.navigate(['/', page]);
  }
}
