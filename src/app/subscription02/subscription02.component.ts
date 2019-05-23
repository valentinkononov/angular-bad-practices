import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';
import { TimerService } from '../services/timer.service';

@Component({
  selector: 'app-subscription02',
  templateUrl: './subscription02.component.html',
  styleUrls: ['./subscription02.component.scss']
})
export class Subscription02Component implements OnInit, OnDestroy {

  subscription: Subscription;
  result = 0;

  constructor(private timerService: TimerService) { }

  ngOnInit() {
    console.log('Initialized');
    this.subscription = this.timerService.initTimer()
      .subscribe(x => {
        this.result = x;
        console.log(x);
      });
  }

  ngOnDestroy() {
    if (this.subscription) {
      this.subscription.unsubscribe();
    }
    console.log('Destroyed');
  }
}
