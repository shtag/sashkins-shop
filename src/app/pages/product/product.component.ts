import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import ProductDB from 'src/app/model/db.product.model';
import { DatabaseService } from 'src/app/shared/database.service';
// import { PRODUCT_COLORS } from './product.colors';
import { MatChipOption } from '@angular/material/chips';
import { CartService } from 'src/app/shared/cart/cart.service';
import { CarouselService } from './carousel/carousel.service';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss'],
})
export class ProductComponent {
  id: string = '1';
  product?: ProductDB;

  productParams = { size: '', color: '' }

  // COLORS = PRODUCT_COLORS;

  openId = 0

  constructor(
    private db: DatabaseService,
    private router: Router,
    private route: ActivatedRoute,
    private cart: CartService,
    private carousel: CarouselService
  ) {

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
      let colorId = this.product.color.find(item => item.name === color)?.photoId
      if (!colorId) {
        colorId = 0
      }
      console.log(colorId)
      const cart = {
        ...this.product,
        id: this.product.id,
        color: color,
        size: size,
        art: this.product.art,
        price: this.product.price,
        quantity: 1,
        image: [this.product.image[colorId]]
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
    const map = this.product!.color.map(item => {
      if (item.name === val) {
        return item.photoId
      }
      return undefined
    }).filter(item => item !== undefined)
    if (map[0] !== undefined && map.length) this.carousel.dispatchId(map[0])
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
