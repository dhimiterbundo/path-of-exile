import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-items-dialog',
  templateUrl: './items-dialog.component.html',
  styleUrls: ['./items-dialog.component.scss']
})
export class ItemsDialogComponent implements OnInit {
  constructor(
    public dialogRef: MatDialogRef<ItemsDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any,
  ) {}

  onNoClick(): void {
    this.dialogRef.close();
  }
  ngOnInit(): void {
  }

}
