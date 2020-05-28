import { Component, OnInit } from '@angular/core';
import { ISound } from '../interfaces/sound.interface';
import { uuidv4 } from '../functions/uuidv4';

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

  updateAudio() {
    // this sends the tones to the sound service so it can play them
    console.log('Updating audio');
  }

  deleteTone(index: number) {
    // splice not working as expected
    this.tones = this.tones.filter((tone: ISound, i: number) => i !== index);
    this.updateAudio();
  }

  addTone() {
    const defaultTone = {
      name: '',
      description: '',
      frequency: 8000,
      playing: false,
      volume: 100,
      waveType: 'sine',
      uuid: uuidv4()
    };

    // add a tone
    this.tones.push(defaultTone);
    this.updateAudio();
    // // add a matching oscillator
    // const oscillator = this.context.createOscillator();
    // // set oscillator type
    // oscillator.type = defaultTone.waveType;
    // oscillator.frequency.value = defaultTone.frequency;
    // oscillator.connect(this.context.destination);

    // // add a gain to the context
    // const gain = this.context.createGain();
    // gain.gain.value = defaultTone.volume;
    // gain.connect(oscillator.frequency);

    // // add it to ready list
    // this.oscillators.push(oscillator);
  }

  cloneTone(index: number) {
    // make a shallow copy of the properties
    this.tones.push({ ...this.tones[index] });
    this.updateAudio();
  }
}
