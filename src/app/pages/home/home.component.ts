import { Component } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {
  items$ = this.firestore.collection('/');

  constructor(private firestore: AngularFirestore) {
    console.log(firestore.collection('/'))
  }
}
