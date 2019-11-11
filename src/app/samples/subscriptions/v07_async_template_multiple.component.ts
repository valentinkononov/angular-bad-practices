import { Component, OnInit, OnDestroy, ChangeDetectionStrategy } from '@angular/core';
import { Observable } from 'rxjs';
import { tap } from 'rxjs/operators';
import { TimerService } from '../../services/timer.service';

@Component({
  selector: 'app-subscription05',
  template: `
      <p>
          <strong>Async Pipe</strong>
          Suggested way, no boilerplate code, works as expetced. Potential problems - usage in several template places

          <br/>
          <strong>Proc</strong>
           - works, no leaks
           - minimal amount of code
           - works with OnPush change detection
          <br/>
          <strong>Cons:</strong>
           - cannot use as is in several places of template
           - cannot use in TS code
           - need to unwrap result in template 
      </p>
      <div>
          <ng-container *ngIf="{
            item1: result1$ | async,
            item2: result2$ | async
          } as data">
              Subscription result: {{ data.item1 }} | {{ data.item2 }}
          </ng-container>
      </div>
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class V07_async_template_multipleComponent implements OnInit, OnDestroy {

  result1$: Observable<number>;
  result2$: Observable<number>;

  constructor(private timerService: TimerService) { }

  ngOnInit() {
    console.log('Initialized');
    this.result1$ = this.timerService.initTimer()
      .pipe(tap(x => {
        console.log(`Timer 1: ${x}`);
      }));

    this.result2$ = this.timerService.initTimer2()
      .pipe(tap(x => {
        console.log(`Timer 2: ${x}`);
      }));
  }

  ngOnDestroy() {
    console.log('Destroyed');
  }

}
