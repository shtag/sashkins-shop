import { AfterViewInit, Component, ElementRef, Input, ViewChild } from '@angular/core';
import ProductDB from 'src/app/model/db.product.model';
import { MaterialModule } from 'src/app/shared/material/material.module';

@Component({
  selector: 'app-carousel',
  standalone: true,
  imports: [MaterialModule],
  templateUrl: './carousel.component.html',
  styleUrl: './carousel.component.scss'
})
export class CarouselComponent implements AfterViewInit {

  @Input() product!: ProductDB

  @ViewChild('images') images!: ElementRef<HTMLElement>;

  imageNumber = 1;

  maxImage = 0

  touchStartX = 0

  disableSwipe = false

  ngAfterViewInit() {
    this.maxImage = this.images.nativeElement.children.length
  }

  nextImage() {
    let right = this.images.nativeElement.style.right;
    this.imageNumber = (+right.split('%').join('')) / 100 + 1
    right = (+right.split('%').join('') + 100).toString() + '%'
    if (this.imageNumber >= this.maxImage) right = '0%'
    this.images.nativeElement.style.right = right
    this.images.nativeElement.style.right = right
  }

  prevImage() {
    let right = this.images.nativeElement.style.right;
    this.imageNumber = (+right.split('%').join('')) / 100 + 1
    right = (+right.split('%').join('') - 100).toString() + '%'
    if (this.imageNumber <= 1) right = ((this.maxImage - 1) * 100) + '%'
    this.images.nativeElement.style.right = right
  }

  detectTouch(event: TouchEvent) {
    this.touchStartX = event.changedTouches[0].screenX
    this.disableSwipe = false
  }

  changeImage(event: TouchEvent) {
    if (Math.abs(this.touchStartX - event.changedTouches[0].screenX) > 40 && !this.disableSwipe) {

      if (this.touchStartX > event.changedTouches[0].screenX) this.nextImage()
      else this.prevImage()
      this.disableSwipe = true
    }
  }

  openImage(id: number) {
    console.log(id)
  }
}
