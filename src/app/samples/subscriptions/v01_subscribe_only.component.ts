import { Component, OnInit, OnDestroy } from '@angular/core';
import { TimerService } from '../../services/timer.service';

@Component({
  selector: 'app-subscription01',
  template: `
      <p>
          <strong>Just Subscribe</strong>
          This case doesn't have unsubscribe at all. when you go back home or to other component, you still can see logs and subscription handling. Memory leak
      </p>
      <div>
          Subscription result: {{ result }}
      </div>
  `,
})
export class V01_subscribe_onlyComponent implements OnInit, OnDestroy {

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
