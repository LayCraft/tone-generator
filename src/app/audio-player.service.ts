import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { ISound } from './interfaces/sound.interface';

@Injectable({
  providedIn: 'root'
})
export class AudioPlayerService {
  // always play the current iSound collection
  sounds: BehaviorSubject<ISound[]> = new BehaviorSubject<ISound[]>([]);
  constructor() { }
}
