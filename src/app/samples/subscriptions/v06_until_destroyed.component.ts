import { Component, OnInit, OnDestroy } from '@angular/core';
import { TimerService } from '../../services/timer.service';
import { untilDestroyed } from "ngx-take-until-destroy";

@Component({
  selector: 'app-subscription06',
  template: `
      <p>
          <strong>Until Destroyed</strong>
          Syntax sugar from 3d party vendor, less code for the same what we have in takeUntil operator
      </p>
      <div>
          Subscription result: {{ result }}
      </div>
  `,
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
