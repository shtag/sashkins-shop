import { Component, ViewChild } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import ProductDB from 'src/app/model/db.product.model';
import { DatabaseService } from 'src/app/shared/database.service';
import { PRODUCT_COLORS } from './product.colors';
import { FormControl, FormGroup } from '@angular/forms';
import { CdkStepper } from '@angular/cdk/stepper';
import { MatChipOption } from '@angular/material/chips';
import { CartService } from 'src/app/shared/cart/cart.service';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss'],
})
export class ProductComponent {
  id: string = '1';
  product?: ProductDB;

  productParams = { size: '', color: '' }

  @ViewChild('stepper') stepper?: CdkStepper;
  images = [
    { url: 'https://i.imgur.com/MPLY7sB.jpg', title: 'Image 1', altText: 'Description of Image 1' },
    { url: 'https://i.imgur.com/MPLY7sB.jpg', title: 'Image 2', altText: 'Description of Image 2' },
    // ... more images
  ];

  COLORS = PRODUCT_COLORS;
  number = new FormControl([]);
  myForm = new FormGroup({
    number: new FormControl([]) // Initialize as an empty array for multiple selections
  });

  // @ViewChild('chipListbox') chipListbox: MatChipListbox

  constructor(private db: DatabaseService, private router: Router, private route: ActivatedRoute, private cart: CartService) {

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

  addToCart() {
    if (!this.product) return
    const color = this.productParams.color;
    const size = this.productParams.size
    if (!color) {
      console.log('chose color')
    } else if (!size) {
      console.log('chose size')
    } else {
      console.log(`Добаслено в корзину
Цвет: ${color}
Размер: ${size}
      `)
      const cart = {
        id: this.product.id,
        color: color,
        size: size,
        art: this.product.art,
        price: this.product.price,
        quantity: 1,
      }
      this.cart.add(cart)
    }
  }

  pickColor(chip: MatChipOption, val: string) {
    if (chip.selected) {
      this.productParams.color = val
    } else {
      this.productParams.color = chip.value = ''
    }
  }

  pickSize(chip: MatChipOption, val: string) {
    if (chip.selected) {
      this.productParams.size = val
    } else {
      this.productParams.size = chip.value = ''
    }
  }

  logger(data: string) {
    console.log(data);
  }
}
