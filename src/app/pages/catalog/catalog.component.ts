import { Component } from '@angular/core';
import ProductDB from 'src/app/model/db.product.model';

@Component({
  selector: 'app-catalog',
  templateUrl: './catalog.component.html',
  styleUrls: ['./catalog.component.scss']
})
export class CatalogComponent {
  // constructor(private db: DatabaseService) {
  //   this.getItems()
  // }
  items: ProductDB[] = []
}
