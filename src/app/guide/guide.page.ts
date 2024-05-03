import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-guide',
  templateUrl: 'guide.page.html',
  styleUrls: ['guide.page.scss'],
})
export class guidePage {
  constructor(private router: Router) {}

  openNewPage(page: string) {
    this.router.navigate(['/', page]);
  }
}
