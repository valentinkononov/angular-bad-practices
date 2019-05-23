import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'bad-practices';

  constructor(private router: Router) {}

  navigateAny() {
    this.router.navigate(['any']);
  }

  navigateSubscription01() {
    this.router.navigate(['subscription01']);
  }

  navigateSubscription02() {
    this.router.navigate(['subscription02']);
  }

  navigateSubscription03() {
    this.router.navigate(['subscription03']);
  }

  navigateSubscription04() {
    this.router.navigate(['subscription04']);
  }

  navigateSubscription05() {
    this.router.navigate(['subscription05']);
  }
}
