import {Component, Input, OnDestroy, OnInit} from '@angular/core';

@Component({
  selector: 'app-progress-bar',
  templateUrl: './progress-bar.component.html',
  styleUrls: ['./progress-bar.component.scss']
})
export class ProgressBarComponent implements OnInit, OnDestroy {

  @Input() backgroundColor = '#d9d9d9';
  @Input() progressColor = '#4CAF50';
  @Input() width = 50;
  @Input() text = 'test';
  @Input() colorText = 'red';

  constructor() { }

  ngOnInit() {
  }

  ngOnDestroy(): void {
  }

}
