import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-number-slider',
  templateUrl: './number-slider.component.html',
  styleUrls: ['./number-slider.component.scss']
})
export class NumberSliderComponent implements OnInit {
  // slider settings
  max = 20000;
  min = 100;
  step = 100;
  thumbLabel = true;
  value = 8000;
  vertical = true;
  tickInterval = 1000;

  playing = false;

  constructor() { }

  ngOnInit(): void {
  }

}
