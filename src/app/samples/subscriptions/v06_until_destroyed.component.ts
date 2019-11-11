import {ChangeDetectionStrategy, Component, OnDestroy, OnInit} from '@angular/core';
import {TimerService} from '../../services/timer.service';
import {untilDestroyed} from "ngx-take-until-destroy";

@Component({
  selector: 'app-subscription06',
  template: `
      <p>
          <strong>Until Destroyed</strong>
          Syntax sugar from 3d party vendor, less code for the same what we have in takeUntil operator

          <br/>
          <strong>Proc</strong>
           - easy to do, less code
           - works, no leaks
          <br/>
          <strong>Cons</strong>
           - doesn't work with OnPush, need to use 'markForCheck'
           - 3d party dependency
      </p>
      <div>
          Subscription result: {{ result }}
      </div>
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class V06_until_destroyedComponent implements OnInit, OnDestroy {

  result = 0;

  constructor(private timerService: TimerService) { }

  ngOnInit() {
    console.log('Initialized');
    this.timerService.initTimer()
      .pipe(untilDestroyed(this))
      .subscribe(x => {
        this.result = x;
        console.log(x);
      });
  }

  ngOnDestroy() {
    console.log('Destroyed');
  }

}
