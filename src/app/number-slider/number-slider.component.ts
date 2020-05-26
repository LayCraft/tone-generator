import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-number-slider',
  templateUrl: './number-slider.component.html',
  styleUrls: ['./number-slider.component.scss']
})
export class NumberSliderComponent implements OnInit {
  autoTicks = true;
  disabled = false;
  invert = false;
  max = 20000;
  min = 20;
  showTicks = true;
  step = 1;
  thumbLabel = true;
  value = 0;
  vertical = true;
  tickInterval = 1;

  constructor() { }

  ngOnInit(): void {
  }

  getSliderTickInterval(): number | 'auto' {
    if (this.showTicks) {
      return this.autoTicks ? 'auto' : this.tickInterval;
    }

    return 0;
  }
}
