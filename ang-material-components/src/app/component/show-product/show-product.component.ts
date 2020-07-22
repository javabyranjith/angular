import { Component, OnInit, ViewChild, AfterViewInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { Product } from '../../model/product.model';
import { ProductService } from '../../service/product.service';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';

@Component({
  selector: 'app-show-product',
  templateUrl: './show-product.component.html',
  styleUrls: ['./show-product.component.css']
})
export class ShowProductComponent implements OnInit, AfterViewInit {

  dataSource = new MatTableDataSource<Product>();
  displayedColumns = ['id', 'name', 'category', 'price'];
  pageLength = 5;
  pageSize = 5;
  pageSizeOptions = [5, 10, 20, 50];

  @ViewChild (MatPaginator) paginator : MatPaginator;
  @ViewChild (MatSort) sort: MatSort;

  constructor(private productService: ProductService) { }
  
  ngAfterViewInit(): void {
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
  }

  searchProduct(searchTerm: string) {
    searchTerm = searchTerm.trim().toLowerCase(); 
    this.dataSource.filter = searchTerm;
  }

  ngOnInit(): void {
    this.productService.getAllProducts().subscribe( (response) =>{
      this.dataSource.data = response.result;
  });

}
}