import { Component, OnInit } from '@angular/core';
import { ISound } from '../interfaces/sound.interface';

@Component({
  selector: 'app-tone-list',
  templateUrl: './tone-list.component.html',
  styleUrls: ['./tone-list.component.scss']
})
export class ToneListComponent implements OnInit {

  tones: ISound[] = [{
    name: 'Tones of Town',
    description: 'A tone for the ages',
    frequency: 8000,
    playing: false,
    volume: 100,
    waveType: 'sine'
  }];

  constructor() { }

  ngOnInit(): void {
  }

  play(index: number, playing: boolean) {

  }
  onChange(index: number, event: ISound) {
    console.log(index, event);
  }

}
