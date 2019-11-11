import { Component, OnInit } from '@angular/core';
import { map, take } from 'rxjs/operators';
import { TimerService } from '../services/timer.service';

@Component({
  selector: 'app-import-check',
  template: `
      <p>
          import-check works!
      </p>
  `,
})
export class ImportCheckComponent implements OnInit {

  result = 0;

  constructor(private timerService: TimerService) { }

  ngOnInit() {

    this.timerService.initTimer()
      .pipe(
        map(x => [x]),
        take(1),
      )
      .subscribe(x => {
        this.result = x[0];
      });
  }

}
