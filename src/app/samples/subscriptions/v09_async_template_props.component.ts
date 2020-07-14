import { Component, OnInit, OnDestroy, ChangeDetectionStrategy } from '@angular/core';
import { Observable } from 'rxjs';
import {map, tap} from 'rxjs/operators';
import { TimerService } from '../../services/timer.service';

@Component({
  selector: 'app-subscription09',
  template: `
      <p>
          <strong>Async Pipe</strong>
          Suggested way, no boilerplate code, works as expetced. Potential problems - usage in several template places

          <br/>
          <strong>Proc</strong>
           - works, no leaks
           - minimal amount of code
           - works with OnPush change detection
           - can use values in different template places
           - can use in TS code
          <br/>
          <strong>Cons:</strong>
           - we doubled amount of calls to observable. in case of http - it would double traffic
      </p>
      <div>
          Subscription result: {{ id$ | async }} | {{ count$ | async }}
      </div>
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class V09_async_template_propsComponent implements OnInit, OnDestroy {

  result$: Observable<{ id: number, count: number}>;
  id$: Observable<number>;
  count$: Observable<number>;

  constructor(private timerService: TimerService) { }

  ngOnInit() {
    console.log('Initialized');
    this.result$ = this.timerService.initTimerForObject()
      .pipe(tap(x => {
        console.log(`Timer: ${x}`);
      }));

    this.id$ = this.result$.pipe(map(x => x.id));
    this.count$ = this.result$.pipe(map(x => x.count));
  }

  ngOnDestroy() {
    console.log('Destroyed');
  }

}
