import { Component, OnInit, OnDestroy, ChangeDetectionStrategy } from '@angular/core';
import { Observable } from 'rxjs';
import { TimerService } from '../services/timer.service';

@Component({
  selector: 'app-subscription05',
  templateUrl: './subscription05.component.html',
  styleUrls: ['./subscription05.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class Subscription05Component implements OnInit, OnDestroy {

  result$: Observable<number>;

  constructor(private timerService: TimerService) { }

  ngOnInit() {
    console.log('Initialized');
    this.result$ = this.timerService.initTimer();
  }

  ngOnDestroy() {
    console.log('Destroyed');
  }

}
