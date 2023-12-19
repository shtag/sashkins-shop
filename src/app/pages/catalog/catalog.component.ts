import { Component } from '@angular/core';
import ProductDB from 'src/app/model/db.product.model';
import { DatabaseService } from 'src/app/shared/database.service';

@Component({
  selector: 'app-catalog',
  templateUrl: './catalog.component.html',
  styleUrls: ['./catalog.component.scss']
})
export class CatalogComponent {
  constructor(private db: DatabaseService) {
    db.getAllProducts().subscribe(item => {
      this.items = item;

    })
  }
  items: ProductDB[] = []
}
