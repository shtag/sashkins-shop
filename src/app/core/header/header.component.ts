
import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { AppState, selectCartLength } from 'src/app/store/store.selectors';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {
  @Input() isOpened: boolean = false;

  @Output() opened = new EventEmitter<boolean>();

  itemsInCart$ = this.store.select(selectCartLength)

  constructor(private router: Router, private store: Store<AppState>) {
  }

  openMenu() {
    this.isOpened = !this.isOpened;
    this.opened.emit(this.isOpened);
  }
}
