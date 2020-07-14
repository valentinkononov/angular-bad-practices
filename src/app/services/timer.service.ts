import { Injectable } from '@angular/core';
import { timer, Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable()
export class TimerService {

  private timer: Observable<number>;
  private timer2: Observable<number>;
  private timer3: Observable<{ id: number, count: number}>;

  initTimer(): Observable<number> {
    console.log('Timer initialized');
    this.timer = timer(1000, 1000);
    return this.timer;
  }

  initTimer2(): Observable<number> {
    this.timer2 = timer(500, 500);
    return this.timer2;
  }

  initTimerForObject(): Observable<{ id: number, count: number}> {
    this.timer3 = timer(500, 500)
      .pipe(map(x => {
        if (x === 10) {
          throw new Error('10 is error');
        }
        return { id: x, count: x * 4 }
      }));
    return this.timer3;
  }
}
