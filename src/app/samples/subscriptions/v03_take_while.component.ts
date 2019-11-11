import { Component, OnInit, OnDestroy } from '@angular/core';
import { takeWhile } from 'rxjs/operators';
import { TimerService } from '../../services/timer.service';

@Component({
  selector: 'app-subscription03',
  template: `
      <p>
          <strong>Take While</strong>
          Automatic way to unsubscribe using rxjs. The only issue - subscription is still alive for a while after component destroyed. Until next time it is triggered
      </p>
      <div>
          Subscription result: {{ result }}
      </div>
  `,
})
export class V03_take_whileComponent implements OnInit, OnDestroy {

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
