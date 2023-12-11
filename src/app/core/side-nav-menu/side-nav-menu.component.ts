import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-side-nav-menu',
  templateUrl: './side-nav-menu.component.html',
  styleUrls: ['./side-nav-menu.component.scss']
})
export class SideNavMenuComponent {
  @Output() opened = new EventEmitter<boolean>();
  closeBar() {
    this.opened.emit(false);
  }
}
