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
          Subscription result: {{ result$ | async }}
      </div>
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class V05_async_pipeComponent implements OnInit, OnDestroy {

  result$: Observable<number>;

  constructor(private timerService: TimerService) { }

  ngOnInit() {
    console.log('Initialized');
    this.result$ = this.timerService.initTimer()
      .pipe(tap(x => {
        console.log(x);
      }));
  }

  ngOnDestroy() {
    console.log('Destroyed');
  }

}
