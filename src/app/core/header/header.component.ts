import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {
  @Input() isOpened: boolean = false;

  @Output() opened = new EventEmitter<boolean>();

  constructor(private router: Router) {

  }

  openMenu() {
    this.isOpened = !this.isOpened;
    this.opened.emit(this.isOpened);
  }

  navigateToCart() {
    this.router.navigateByUrl('./cart')
  }
}
