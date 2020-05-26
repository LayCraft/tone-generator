import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ToneDialogComponent } from '../tone-dialog/tone-dialog.component';

@Component({
  selector: 'app-tone-list',
  templateUrl: './tone-list.component.html',
  styleUrls: ['./tone-list.component.scss']
})
export class ToneListComponent implements OnInit {

  constructor(public dialog: MatDialog) { }

  ngOnInit(): void {
  }

  openDialog() {
    this.dialog.open(ToneDialogComponent);
  }
}
