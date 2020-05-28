import { Component, OnInit } from '@angular/core';
import { ISound } from '../interfaces/sound.interface';

@Component({
  selector: 'app-tone-list',
  templateUrl: './tone-list.component.html',
  styleUrls: ['./tone-list.component.scss']
})
export class ToneListComponent implements OnInit {
  tones: ISound[] = [];
  oscillators: any[] = []; // collection of sounds.
  context; // audio context

  constructor() { }

  ngOnInit(): void {
    // set up audio context
    this.setupAudio();

    // be sure there is at least one tone
    if (this.tones.length === 0) {
      this.addTone();
    }
  }

  setupAudio() {
    // make context for this page
    this.context = new AudioContext();
  }

  play(index: number, playing: boolean) {
    this.tones[index].playing = playing;
    playing ? this.oscillators[index].start() : this.oscillators[index].stop();
  }

  deleteTone(index: number) {
    // splice not working as expected
    this.tones = this.tones.filter((tone: ISound, i: number) => i !== index);
  }

  addTone() {
    const defaultTone = {
      name: '',
      description: '',
      frequency: 8000,
      playing: false,
      volume: 100,
      waveType: 'sine'
    };

    // add a tone
    this.tones.push(defaultTone);

    // add a matching oscillator
    const oscillator = this.context.createOscillator();
    // set oscillator type
    oscillator.type = defaultTone.waveType;
    // oscillator.frequency = defaultTone.frequency;
    oscillator.connect(this.context.destination);
    // add it to ready list
    this.oscillators.push(oscillator);
  }
  cloneTone(index: number) {
    // make a shallow copy of the properties
    this.tones.push({ ...this.tones[index] });
  }
}
