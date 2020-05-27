import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { ISound } from '../interfaces/sound.interface';
import { MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-tone-dialog',
  templateUrl: './tone-dialog.component.html',
  styleUrls: ['./tone-dialog.component.scss']
})
export class ToneDialogComponent implements OnInit {
  // The tone dialog takes the basic sound and modifies it in a dialog box. When save is clicked it outputs those values to the parent
  @Input() tone: ISound;
  @Output() toneChange = new EventEmitter<ISound>();

  constructor() { }

  ngOnInit(): void {
    // if no tone was passed in use the default and emit it
    if (!this.tone) {
      this.tone = {
        frequency: 8000,
        volume: 100,
        waveType: 'sine',
        playing: false
      };
      this.onInput();
    }
  }
  onInput() {
    // when the close button is clicked emit the value and close the dialog
    this.toneChange.emit(this.tone);
  }
}
