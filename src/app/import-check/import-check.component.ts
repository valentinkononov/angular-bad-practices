import { Component, OnInit } from '@angular/core';
import { map, take } from 'rxjs/operators';
import { TimerService } from '../services/timer.service';

@Component({
  selector: 'app-import-check',
  templateUrl: './import-check.component.html',
  styleUrls: ['./import-check.component.scss']
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
