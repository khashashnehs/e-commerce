import { Component } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-add-product-dialog',
  templateUrl: './add-product-dialog.component.html',
  styleUrls: ['./add-product-dialog.component.sass']
})
export class AddProductDialogComponent {


  constructor(public dialogRef: MatDialogRef<AddProductDialogComponent>) {}

  onCancelClick(): void {
    this.dialogRef.close();
  }

  onAddClick(): void {
   
  }
}
