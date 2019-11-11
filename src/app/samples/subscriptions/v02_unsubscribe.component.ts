import {ChangeDetectionStrategy, Component, OnDestroy, OnInit} from '@angular/core';
import {Subscription} from 'rxjs';
import {TimerService} from '../../services/timer.service';

@Component({
  selector: 'app-subscription02',
  template: `
      <p>
          <strong>Straight Unsubscribe</strong>
          Straight unsubscribe, no leaks, cool behavior. But we should necessary do it Manually for each subscription in each component
          to see UI updated - comment OnPush
          
          <br/>
          <strong>Proc</strong>
           - works, no leaks
          
          <br/>
          <strong>Cons</strong>
           - need to do it manually for EVERY subscription
           - doesn't work with OnPush, need to use 'markForCheck'
      </p>
      <div>
          Subscription result: {{ result }}
      </div>
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class V02_unsubscribeComponent implements OnInit, OnDestroy {

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
