
import { Component, EventEmitter, Input, OnDestroy, Output } from '@angular/core';
import { Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { AppState, selectCart } from 'src/app/store/store.selectors';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnDestroy {
  @Input() isOpened: boolean = false;

  @Output() opened = new EventEmitter<boolean>();

  itemsInCart = 0

  // itemsInCart$ = this.store.select(selectCartLength)

  constructor(private router: Router, private store: Store<AppState>) {
    this.store.select(selectCart).subscribe(cart => {
      const items = cart.items.map(item => item.quantity);
      if (items.length) {
        const n = items.reduce((acc, now) => acc + now)
        this.itemsInCart = n
      } else {
        this.itemsInCart = 0
      }
    })
  }

  openMenu() {
    this.isOpened = !this.isOpened;
    this.opened.emit(this.isOpened);
  }

  ngOnDestroy() {
    console.log('destroy')
  }
}
