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
  @Input() tone: ISound = {
    frequency: 8000,
    volume: 100,
    waveType: 'sine',
    playing: false
  };
  @Output() toneChange = new EventEmitter<ISound>();

  constructor(
    // Reference to this component to handle close behavior
    public dialogRef: MatDialogRef<ToneDialogComponent>
  ) { }

  ngOnInit(): void {
  }
  onSave() {
    // when the close button is clicked emit the value and close the dialog
    this.toneChange.emit(this.tone);
    this.dialogRef.close();
  }
}
