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

  ngAfterViewInit() {
    this.maxImage = this.images.nativeElement.children.length
  }

  nextImage(images: HTMLElement) {
    let right = images.style.right;
    this.imageNumber = (+right.split('%').join('')) / 100 + 1
    right = (+right.split('%').join('') + 100).toString() + '%'
    if (this.imageNumber >= this.maxImage) right = '0%'
    images.style.right = right
  }

  prevImage(images: HTMLElement) {
    let right = images.style.right;
    console.log(this.images.nativeElement)
    this.imageNumber = (+right.split('%').join('')) / 100 + 1
    right = (+right.split('%').join('') - 100).toString() + '%'
    if (this.imageNumber <= 1) right = ((this.maxImage - 1) * 100) + '%'
    images.style.right = right
  }

  openImage(id: number) {
    console.log(id)
  }
}
