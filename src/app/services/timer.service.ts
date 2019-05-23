import { Injectable } from '@angular/core';
import { timer, Observable } from 'rxjs';

@Injectable()
export class TimerService {

  private timer: Observable<number>;

  initTimer(): Observable<number> {
    this.timer = timer(1000, 1000);
    return this.timer;
  }
}
