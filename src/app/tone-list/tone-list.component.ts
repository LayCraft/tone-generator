import { Component, OnInit } from '@angular/core';
import { ISound } from '../interfaces/sound.interface';
import { uuidv4 } from '../functions/uuidv4';
import { AudioPlayerService } from '../audio-player.service';

@Component({
  selector: 'app-tone-list',
  templateUrl: './tone-list.component.html',
  styleUrls: ['./tone-list.component.scss']
})
export class ToneListComponent implements OnInit {
  tones: ISound[] = [];

  constructor(private audioPlayerService: AudioPlayerService) { }

  ngOnInit(): void {
    // be sure there is at least one tone
    if (this.tones.length === 0) {
      this.addTone();
    }
  }

  updateAudio() {
    // this sends the tones to the sound service so it can play them
    this.audioPlayerService.setTones(this.tones);
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
  }

  cloneTone(index: number) {
    // make a shallow copy of the properties generate a new uuid
    this.tones.push({ ...this.tones[index], uuid: uuidv4() });
    this.updateAudio();
  }
}
