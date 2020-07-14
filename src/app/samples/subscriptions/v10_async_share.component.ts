import { Component, OnInit, OnDestroy, ChangeDetectionStrategy } from '@angular/core';
import {Observable, of} from 'rxjs';
import {catchError, map, publish, publishReplay, refCount, share, shareReplay, tap} from 'rxjs/operators';
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
           - no call duplicates
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
export class V10_async_shareComponent implements OnInit, OnDestroy {

  result$: Observable<{ id: number, count: number}>;
  id$: Observable<number>;
  count$: Observable<number>;

  constructor(private timerService: TimerService) { }

  ngOnInit() {
    console.log('Initialized');
    this.result$ = this.timerService.initTimerForObject()
      .pipe(
        tap(x => {console.log(`Timer: ${x}`);}),
        share(),  // after there is no subscribers, it will disconnect. and reconnect in someone subscribe again
      //   publish(),   // this one will disconnect after there is no subscribers, if Source has completed - new subscribers will receive completed event
      //   refCount(),
      //   publishReplay(),  // after disconnection, this multicast will repeat N buffered values to the new subscribers
        // refCount(),
        // shareReplay(), // NO unsubscription
        // shareReplay({ refCount: true }), // NO unsubscription
        catchError((error: any) => {
          console.log(`Caught error: ${error}`);
          return of({ id: 0, count: 0 });
        }),
      );

    this.id$ = this.result$.pipe(map(x => x.id));
    this.count$ = this.result$.pipe(map(x => x.count));
  }

  ngOnDestroy() {
    console.log('Destroyed');
  }

}
