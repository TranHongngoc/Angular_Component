import {Component, Input, OnDestroy, OnInit} from '@angular/core';

@Component({
  selector: 'app-countdown-timer',
  templateUrl: './countdown-timer.component.html',
  styleUrls: ['./countdown-timer.component.scss']
})
export class CountdownTimerComponent implements OnInit, OnDestroy {

  private intervalId = 0;
  message = '';
  remainingTime: number;

  @Input()
  seconds = 11;

  constructor() { }

  ngOnInit() {
    this.remainingTime = this.seconds;
  }

  ngOnDestroy() {
  }
  clearTimer() {}
  start() {}
  stop() {}
  reset() {}
  private countDown() {}

}
