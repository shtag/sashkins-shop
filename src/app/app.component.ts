import { Component } from '@angular/core';
import { Store } from '@ngrx/store';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'sashkins-shop';
  opened: boolean = false;

  constructor(private store: Store) {
    window.addEventListener("beforeunload", () => {
      store.select(state => state).subscribe(item => localStorage.setItem('ngStorage', JSON.stringify(item)))
    });
  }
}
