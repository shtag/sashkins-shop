

import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import ProductDB from 'src/app/model/db.product.model';
import { DatabaseService } from 'src/app/shared/database.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  result: Observable<ProductDB[]>;
  res = '';
  constructor(private db: DatabaseService) {
    this.result = this.db.getAllProducts()
    this.result.subscribe(item => this.res = JSON.stringify(item))
  }

  ngOnInit(): void {
    console.log('start')
    console.log(this.db.readAll())

  }

  getAllProducts() {
    this.db.getAllProducts().subscribe(item => console.log(item))
  }

  getAllOrders() {
    this.db.getAllOrders().subscribe(item => console.log(item))
  }

  getProduct(id: string) {
    this.db.getProduct(id).subscribe(item => console.log(item))
  }
  setOrder(id: string) {

    this.db.setOrder(id, this.db.createOrder())
  }
}