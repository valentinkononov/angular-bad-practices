import { Component, OnInit, OnDestroy } from '@angular/core';
import { TimerService } from '../services/timer.service';

@Component({
  selector: 'app-subscription01',
  templateUrl: './subscription01.component.html',
  styleUrls: ['./subscription01.component.scss']
})
export class Subscription01Component implements OnInit, OnDestroy {

  result = 0;

  constructor(private timerService: TimerService) { }

  ngOnInit() {
    console.log('Initialized');
    this.timerService.initTimer()
      .subscribe(x => {
        this.result = x;
        console.log(x);
      });
  }

  ngOnDestroy() {
    console.log('Destroyed');
  }

}
