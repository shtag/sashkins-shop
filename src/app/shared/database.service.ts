import { Injectable } from '@angular/core';
import ProductDB from '../model/db.product.model';
import { DataSnapshot, Database, get, getDatabase, onValue, ref } from '@angular/fire/database';
import { FirebaseApp } from '@angular/fire/app';
import { Observable, from, map } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DatabaseService {
  db: Database
  constructor(private fireDB: FirebaseApp) {
    this.db = getDatabase(this.fireDB);
  }

  readAll() {
    const starCountRef = ref(this.db, '/products/dress')
    return from(get(starCountRef)).pipe(
      map(snapshot => {
        const data = snapshot.val();
        const productDBArray: ProductDB[] = [];
        productDBArray.push({ ...data });
        return productDBArray;
      })
    )
  }

  getAllProducts(): Observable<ProductDB[]> {
    const productsRef = ref(this.db, '/products/dress')// изменить на настоящий путь для товаров
    return new Observable(subscriber => {
      const unsubscribeFn = onValue(productsRef, (snapshot: DataSnapshot) => {
        const data = snapshot.val();
        const productDBArray: ProductDB[] = [];
        productDBArray.push({ ...data });
        subscriber.next(productDBArray);
      });
      return () => unsubscribeFn();
    });
  }
  getProduct(id: string): Observable<ProductDB> {
    const productsRef = ref(this.db, `/products/dress/${id}`)// изменить на настоящий путь для товаров
    return new Observable(subscriber => {
      const unsubscribeFn = onValue(productsRef, (snapshot: DataSnapshot) => {
        // const data = snapshot.val();
        const product: ProductDB = snapshot.val();
        // productDBArray.push(product);
        subscriber.next(product);
      });
      return () => unsubscribeFn();
    });
  }

  getAllOrders(): Observable<ProductDB[]> {
    const productsRef = ref(this.db, '/orders')// изменить на настоящий путь для заказов
    return new Observable(subscriber => {
      const unsubscribeFn = onValue(productsRef, (snapshot: DataSnapshot) => {
        const data = snapshot.val();
        const productDBArray: ProductDB[] = [];
        productDBArray.push({ ...data });
        subscriber.next(productDBArray);
      });
      return () => unsubscribeFn();
    });
  }

  getOrder(id: string): Observable<ProductDB> {
    const productsRef = ref(this.db, `/orders/${id}`)// изменить на настоящий путь для заказа
    return new Observable(subscriber => {
      const unsubscribeFn = onValue(productsRef, (snapshot: DataSnapshot) => {
        // const data = snapshot.val();
        const product: ProductDB = snapshot.val();
        // productDBArray.push(product);
        subscriber.next(product);
      });
      return () => unsubscribeFn();
    });
  }

}


