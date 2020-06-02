import { Injectable } from '@angular/core';
import { ISound } from './interfaces/sound.interface';

@Injectable({
  providedIn: 'root'
})
export class AudioPlayerService {
  // always play the current iSound collection
  tones: ISound[] = [];
  context;

  constructor() {
    this.context = new AudioContext();
  }
  setTones(tones: ISound[]) {
    // update the source tones
    this.tones = tones;
    this.playTones();
  }
  playTones() {
    const osc = this.context.createOscillator();
    osc.frequency.value = 440;
    osc.connect(this.context.destination);
    osc.start(0);


    // console.log('Playing these', this.tones);
    // // add a matching oscillator
    // const oscillator = this.context.createOscillator();
    // // set oscillator type
    // oscillator.type = 'sine';
    // oscillator.frequency.value = 440;
    // oscillator.connect(this.context.destination);

    // // add a gain to the context
    // const gain = this.context.createGain();
    // gain.gain.value = 100;
    // gain.connect(oscillator.frequency);
    // // add it to ready list
    // // this.oscillators.push(oscillator);
  }
}
