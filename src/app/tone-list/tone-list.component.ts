import { Component, OnInit } from '@angular/core';
import { ISound } from '../interfaces/sound.interface';

@Component({
  selector: 'app-tone-list',
  templateUrl: './tone-list.component.html',
  styleUrls: ['./tone-list.component.scss']
})
export class ToneListComponent implements OnInit {

  tones: ISound[] = [];

  constructor() { }

  ngOnInit(): void {
    // be sure there is at least one tone
    if (this.tones.length === 0) {
      this.addTone();
    }
  }

  play(index: number, playing: boolean) {
    this.tones[index].playing = playing;
  }

  deleteTone(index: number) {
    // splice not working as expected
    this.tones = this.tones.filter((tone: ISound, i: number) => i !== index);
  }

  addTone() {
    this.tones.push({
      name: '',
      description: '',
      frequency: 8000,
      playing: false,
      volume: 100,
      waveType: 'sine'
    });
  }
  cloneTone(index: number) {
    // make a shallow copy of the properties
    this.tones.push({ ...this.tones[index] });
  }
}
