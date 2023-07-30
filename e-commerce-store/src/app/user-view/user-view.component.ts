import { Component } from '@angular/core';
import { ProductService } from '../product.service';
import { Product } from '../product.model';

@Component({
  selector: 'app-user-view',
  templateUrl: './user-view.component.html',
  styleUrls: ['./user-view.component.sass']
})
export class UserViewComponent {
  categories: any[] = [];
  products: any[] = [];

  selectedCategory: string = '';
  priceRange: number[] = [0, 1000];

  constructor(private productService: ProductService) {}

  ngOnInit() {
    this.productService.getCategories().subscribe(categories => {
      this.categories = categories;
    });

    this.productService.getProducts().subscribe(products => {
      this.products = products;
    });
  }

  getProductsByCategory(categoryId: number): Product[] {
    console.log(categoryId);
    
    return this.products?.filter((product) => product.category === categoryId);
  }
  

}
