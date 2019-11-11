import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';
import { TimerService } from '../../services/timer.service';

@Component({
  selector: 'app-subscription04',
  template: `
      <p>
          <strong>Take Until</strong>
          Cool rxjs way to unsubscribe. Issue is boilerplate code for it.
      </p>
      <div>
          Subscription result: {{ result }}
      </div>
  `,
})
export class V04_take_untilComponent implements OnInit, OnDestroy {

  result = 0;
  unsubscribe: Subject<void> = new Subject();

  constructor(private timerService: TimerService) { }

  ngOnInit() {
    console.log('Initialized');
    this.timerService.initTimer()
      .pipe(takeUntil(this.unsubscribe))
      .subscribe();
      // .subscribe(x => {
      //   this.result = x;
      //   console.log(x);
      // });
  }

  ngOnDestroy() {
    this.unsubscribe.next();
    this.unsubscribe.complete();
    console.log('Destroyed');
  }

}
