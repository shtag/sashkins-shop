import { CarouselService } from './carousel.service';
import { AfterViewInit, Component, ElementRef, Input, OnDestroy, ViewChild } from '@angular/core';
import ProductDB from 'src/app/model/db.product.model';
import { MaterialModule } from 'src/app/shared/material/material.module';

@Component({
  selector: 'app-carousel',
  standalone: true,
  imports: [MaterialModule],
  templateUrl: './carousel.component.html',
  styleUrl: './carousel.component.scss'
})
export class CarouselComponent implements AfterViewInit, OnDestroy {

  @Input() product!: ProductDB

  @Input() openId = 0

  @ViewChild('images') images!: ElementRef<HTMLElement>;

  imageNumber = 1;

  maxImage = 0

  touchStartX = 0

  disableSwipe = false

  constructor(private carousel: CarouselService) {
  }

  ngAfterViewInit() {
    this.carousel.openId.subscribe(id => this.openImage(id))
    this.maxImage = this.images.nativeElement.children.length
  }

  nextImage() {
    // this.carousel.next(this.images)
    let right = this.images.nativeElement.style.right;
    if (this.imageNumber >= this.maxImage) {
      right = '0%'
      this.imageNumber = 1
    } else {
      this.imageNumber++
      right = (+right.split('%').join('') + 100).toString() + '%'
    }
    this.images.nativeElement.style.right = right
  }

  prevImage() {
    // this.carousel.prev(this.images)
    let right = this.images.nativeElement.style.right;
    if (this.imageNumber <= 1) {
      right = ((this.maxImage - 1) * 100) + '%'
      this.imageNumber = this.maxImage
    } else {
      this.imageNumber--
      right = (+right.split('%').join('') - 100).toString() + '%'
    }
    this.images.nativeElement.style.right = right
  }

  detectTouch(event: TouchEvent) {
    this.touchStartX = event.changedTouches[0].screenX
    this.disableSwipe = false
  }

  changeImage(event: TouchEvent) {
    // this.carousel.changeImage(event, this.images)
    if (Math.abs(this.touchStartX - event.changedTouches[0].screenX) > 40 && !this.disableSwipe) {
      if (this.touchStartX > event.changedTouches[0].screenX && this.imageNumber !== this.maxImage) this.nextImage()
      else if (this.touchStartX < event.changedTouches[0].screenX && this.imageNumber !== 1) this.prevImage()
      this.disableSwipe = true
    }
  }

  openImage(id: number) {
    // console.log(id)
    this.images.nativeElement.style.right = (id * 100).toString() + '%'
  }

  ngOnDestroy(): void {
    console.log('unsub')
    // this.carousel.openId.unsubscribe()
  }
}
