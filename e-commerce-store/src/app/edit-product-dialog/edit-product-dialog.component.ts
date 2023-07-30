import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { Product } from '../product.model';

@Component({
  selector: 'app-edit-product-dialog',
  templateUrl: './edit-product-dialog.component.html',
  styleUrls: ['./edit-product-dialog.component.sass']
})
export class EditProductDialogComponent {
  editedProduct: Product;

  constructor(
    public dialogRef: MatDialogRef<EditProductDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: Product
  ) {
    // Create a copy of the product data to avoid modifying the original data directly
    this.editedProduct = { ...data };
  }

  onUpdateProduct() {
    // Implement the logic to update the edited product in the backend and close the dialog.
    // You can use the ProductService for this purpose.
    this.dialogRef.close(this.editedProduct);
  }
}
