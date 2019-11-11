import { Injectable } from '@angular/core';
import { timer, Observable } from 'rxjs';

@Injectable()
export class TimerService {

  private timer: Observable<number>;
  private timer2: Observable<number>;

  initTimer(): Observable<number> {
    this.timer = timer(1000, 1000);
    return this.timer;
  }

  initTimer2(): Observable<number> {
    this.timer2 = timer(500, 500);
    return this.timer2;
  }
}
