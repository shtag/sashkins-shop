import { ElementRef, Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CarouselService {
  imageNumber = 1;

  maxImage = 0

  touchStartX = 0

  disableSwipe = false

  openId: Subject<number>

  constructor() {
    this.openId = new Subject<number>()
  }

  dispatchId(id: number) {
    this.openId.next(id)
  }

  next(images: ElementRef<HTMLElement>) {
    let right = images.nativeElement.style.right;
    if (this.imageNumber >= this.maxImage) {
      right = '0%'
      this.imageNumber = 1
    } else {
      this.imageNumber++
      right = (+right.split('%').join('') + 100).toString() + '%'
    }
    images.nativeElement.style.right = right
  }

  prev(images: ElementRef<HTMLElement>) {
    let right = images.nativeElement.style.right;
    if (this.imageNumber <= 1) {
      right = ((this.maxImage - 1) * 100) + '%'
      this.imageNumber = this.maxImage
    } else {
      this.imageNumber--
      right = (+right.split('%').join('') - 100).toString() + '%'
    }
    images.nativeElement.style.right = right
  }

  detectTouch(event: TouchEvent) {
    this.touchStartX = event.changedTouches[0].screenX
    this.disableSwipe = false
  }

  changeImage(event: TouchEvent, images: ElementRef<HTMLElement>) {
    if (Math.abs(this.touchStartX - event.changedTouches[0].screenX) > 40 && !this.disableSwipe) {
      if (this.touchStartX > event.changedTouches[0].screenX && this.imageNumber !== this.maxImage) this.next(images)
      else if (this.touchStartX < event.changedTouches[0].screenX && this.imageNumber !== 1) this.prev(images)
      this.disableSwipe = true
    }
  }

  openImage(id: number) {
    console.log(id)
  }
}
