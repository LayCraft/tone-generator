import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { ISound } from '../interfaces/sound.interface';
import { MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-tone-controls',
  templateUrl: './tone-controls.component.html',
  styleUrls: ['./tone-controls.component.scss']
})
export class ToneControlsComponent implements OnInit {
  // The tone dialog takes the basic sound and modifies it in a dialog box. When save is clicked it outputs those values to the parent
  @Input() tone: ISound; // if this is null the component won't render
  @Output() toneChange = new EventEmitter<ISound>();

  constructor() { }

  ngOnInit(): void { }
  onInput() {
    // when the close button is clicked emit the value and close the dialog
    this.toneChange.emit(this.tone);
    console.log(this.tone)
  }
}
