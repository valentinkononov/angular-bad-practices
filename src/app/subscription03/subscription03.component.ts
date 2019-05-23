import { Component, OnInit, OnDestroy } from '@angular/core';
import { takeWhile } from 'rxjs/operators';
import { TimerService } from '../services/timer.service';

@Component({
  selector: 'app-subscription03',
  templateUrl: './subscription03.component.html',
  styleUrls: ['./subscription03.component.scss']
})
export class Subscription03Component implements OnInit, OnDestroy {

  result = 0;
  alive = true;

  constructor(private timerService: TimerService) { }

  ngOnInit() {
    console.log('Initialized');
    this.timerService.initTimer()
      .pipe(takeWhile(() => {
        console.log('check'); return this.alive; }))
      .subscribe(x => {
        this.result = x;
        console.log(x);
      });
  }

  ngOnDestroy() {
    this.alive = false;
    console.log('Destroyed');
  }
}
