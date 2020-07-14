import {Component, OnInit, OnDestroy, ChangeDetectionStrategy, OnChanges, SimpleChanges} from '@angular/core';
import { Observable } from 'rxjs';
import { tap } from 'rxjs/operators';
import { TimerService } from '../../services/timer.service';

@Component({
  selector: 'app-subscription08',
  template: `
      <p>
          <strong>Async Pipe</strong>
          Suggested way, no boilerplate code, works as expetced. Potential problems - usage in several template places

          <br/>
          <strong>Proc</strong>
           - less code
          <br/>
          <strong>Cons:</strong>
           - works ?
           - infinite loop because every time there is new instance of observable.
           - solution - save it into variable
      </p>
      <div>
          <ng-container *ngIf="{
            item1: timerService.initTimer() | async
          } as data">
              Subscription result: {{ data.item1 }}
          </ng-container>
      </div>
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class V08_async_endless_loopComponent implements OnInit, OnChanges, OnDestroy {

  result1$: Observable<number>;
  result2$: Observable<number>;

  constructor(public timerService: TimerService) { }
  //
  // getTimerValue() {
  //   console.log(1)
  //   return this.timerService.initTimer();
  // }

  ngOnInit() {
    console.log('Initialized');
    // this.result1$ = this.timerService.initTimer()
    //   .pipe(tap(x => {
    //     console.log(`Timer 1: ${x}`);
    //   }));
    //
    // this.result2$ = this.timerService.initTimer2()
    //   .pipe(tap(x => {
    //     console.log(`Timer 2: ${x}`);
    //   }));
  }

  ngOnChanges(changes: SimpleChanges): void {
    console.log('Changes');
  }

  ngOnDestroy() {
    console.log('Destroyed');
  }

}
