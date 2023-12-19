import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import ProductDB from 'src/app/model/db.product.model';
import { DatabaseService } from 'src/app/shared/database.service';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss']
})
export class ProductComponent {
  id: string = '1';
  product?: ProductDB;

  constructor(private db: DatabaseService, private router: Router, private route: ActivatedRoute) {
    route.params.subscribe(params => this.id = params["id"])
    this.db.allProducts$.subscribe(item => {
      route.params.subscribe((params) => {
        this.id = params["id"];
      });
      const arr = item.filter(item => item.id.toString() === this.id);
      if (arr.length === 0) {
        router.navigate(['page-not-found'])
      } else {
        this.product = arr[0]
      }
    })
  }
}
