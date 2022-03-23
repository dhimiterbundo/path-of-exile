import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Item } from 'src/app/shared/models/response.model';

@Component({
  selector: 'app-items-dialog',
  templateUrl: './items-dialog.component.html',
  styleUrls: ['./items-dialog.component.scss']
})
export class ItemsDialogComponent implements OnInit {
  filters: FormGroup;
  items: Item[];

  constructor(
    public dialogRef: MatDialogRef<ItemsDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: Item[],
    private fb: FormBuilder
  ) { }

  onNoClick(): void {
    this.dialogRef.close();
  }
  ngOnInit(): void {
    this.items = this.data;
    this.buildFormGroup();
    this.filters.controls.itemName.valueChanges.subscribe(x => {
      if (x) {
        this.items = this.data.filter(c => c.name.includes(x));
      } else {
        this.items = this.data;
      }
    });

  }

  buildFormGroup(): void {
    this.filters = this.fb.group({
      itemName: new FormControl('')
    });
  }
  clearFilters(): void {
    this.filters.reset();
    this.items = this.data;
  }
}
