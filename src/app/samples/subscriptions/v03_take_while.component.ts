import {ChangeDetectionStrategy, ChangeDetectorRef, Component, OnDestroy, OnInit} from '@angular/core';
import {takeWhile} from 'rxjs/operators';
import {TimerService} from '../../services/timer.service';

@Component({
  selector: 'app-subscription03',
  template: `
      <p>
          <strong>Take While</strong>
          Automatic way to unsubscribe using rxjs. The only issue - subscription is still alive for a while after component destroyed. Until next time it is triggered
          to see UI updated - comment OnPush
          
          <br/>
          <strong>Proc</strong>
            - easy to use, minimal amount of code
          
          <br/>
          <strong>Cons</strong>
           - still one iteration of subscription is ON
           - doesn't work with OnPush, need to use 'markForCheck'
      </p>
      <div>
          Subscription result: {{ result }}
      </div>
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class V03_take_whileComponent implements OnInit, OnDestroy {

  result = 0;
  alive = true;

  constructor(private timerService: TimerService, private cd: ChangeDetectorRef) { }

  ngOnInit() {
    console.log('Initialized');
    this.timerService.initTimer()
      .pipe(takeWhile(() => {
        console.log('check'); return this.alive; }))
      .subscribe(x => {
        this.result = x;
        console.log(x);
        this.cd.markForCheck();
      });
  }

  ngOnDestroy() {
    this.alive = false;
    console.log('Destroyed');
  }
}
