import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';
import { TimerService } from '../services/timer.service';

@Component({
  selector: 'app-subscription04',
  templateUrl: './subscription04.component.html',
  styleUrls: ['./subscription04.component.scss']
})
export class Subscription04Component implements OnInit, OnDestroy {

  result = 0;
  unsubscribe: Subject<void> = new Subject();

  constructor(private timerService: TimerService) { }

  ngOnInit() {
    console.log('Initialized');
    this.timerService.initTimer()
      .pipe(takeUntil(this.unsubscribe))
      .subscribe(x => {
        this.result = x;
        console.log(x);
      });
  }

  ngOnDestroy() {
    this.unsubscribe.next();
    this.unsubscribe.complete();
    console.log('Destroyed');
  }

}
