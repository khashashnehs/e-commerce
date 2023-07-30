import { Component, OnInit, ViewChild } from '@angular/core';
import { ProductService } from '../product.service';
import { Product } from '../product.model'; // Import the Product model
import { CdkTableDataSourceInput } from '@angular/cdk/table';
import { MatTableDataSource } from '@angular/material/table';
import { MatPaginator } from '@angular/material/paginator';
import { MatDialog } from '@angular/material/dialog';
import { EditProductDialogComponent } from '../edit-product-dialog/edit-product-dialog.component';
import { AddProductDialogComponent } from '../add-product-dialog/add-product-dialog.component';

@Component({
  selector: 'app-admin-view',
  templateUrl: './admin-view.component.html',
  styleUrls: ['./admin-view.component.sass']
})
export class AdminViewComponent implements OnInit {
  products: Product[] = [];
  dataSource!: MatTableDataSource<Product>;
  newProduct: any;
  displayedColumns: string[] = ['id', 'title', 'price', 'actions'];

  @ViewChild(MatPaginator, { static: true }) paginator!: MatPaginator;

  constructor(
    private productService: ProductService,
    private dialog: MatDialog
    ) { }

  ngOnInit(): void {
    this.getAllProducts();
  }


  getAllProducts(): void {
    this.productService.getAllProducts().subscribe(
      (products: Product[]) => {        
        this.products = products;
        this.dataSource = new MatTableDataSource<Product>(this.products);
        this.dataSource.paginator = this.paginator;
      },
      (error: any) => {
        console.error('Error fetching products:', error);
      }
    );
  }

  addProduct(): void {
    this.productService.addProduct(this.newProduct).subscribe(
      (product) => {
        this.products.push(product);
        this.newProduct = product;
      },
      (error) => {
        // Handle error
      }
    );
  }
  openAddProductDialog(): void {
    const dialogRef = this.dialog.open(AddProductDialogComponent, {
      width: '400px'
    });

    dialogRef.afterClosed().subscribe(result => {
      // Handle the result after the dialog is closed, e.g., add the new product to the table.
    });
  }
  editProduct(product: Product){
    const dialogRef = this.dialog.open(EditProductDialogComponent, {
      width: '400px',
      data: product
    });
  }


  updateProduct(product: Product): void {
    this.productService.updateProduct(product).subscribe(
      (updatedProduct) => {
        // Optional: Handle success
      },
      (error) => {
        // Handle error
      }
    );
  }

  deleteProduct(productId: number): void {
    this.productService.deleteProduct(productId).subscribe(
      () => {
        this.products = this.products.filter(p => p.id !== productId);
      },
      (error) => {
        // Handle error
      }
    );
  }
}
