
import { Injectable } from '@angular/core';
import ProductDB from '../model/db.product.model';
import { DataSnapshot, Database, get, getDatabase, onValue, ref, set } from '@angular/fire/database';
import { FirebaseApp } from '@angular/fire/app';
import { Observable, from, map } from 'rxjs';
import OrderDB from '../model/db.order.model';

import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
import { signInWithEmailAndPassword } from '@angular/fire/auth';



@Injectable({
  providedIn: 'root'
})
export class DatabaseService {
  db: Database
  constructor(private fireDB: FirebaseApp) {
    this.db = getDatabase(this.fireDB);
  }

  readAll() {
    const auth = getAuth();
    // signInWithEmailAndPassword(auth, 'shtag@gmail.com', 'shtag1861')
    //   .then((userCredential) => {
    //     // Signed up 
    //     const user = userCredential.user;
    //     console.log(user)
    //     // ...
    //   })
    //   .catch((error) => {
    //     console.log(error)
    //     // ..
    //   });
    // return this.asd.collection('products').get()
    const starCountRef = ref(this.db, '/')
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
    const productsRef = ref(this.db, '/products/')// изменить на настоящий путь для товаров
    return new Observable(subscriber => {
      const unsubscribeFn = onValue(productsRef, (snapshot: DataSnapshot) => {
        const data = snapshot.val();
        const productDBArray: ProductDB[] = [];
        productDBArray.push(...data);
        subscriber.next(productDBArray);
      });
      return () => unsubscribeFn();
    });
  }
  getProduct(id: string): Observable<ProductDB> {
    const productsRef = ref(this.db, `/products/${id}`)
    return new Observable(subscriber => {
      const unsubscribeFn = onValue(productsRef, (snapshot: DataSnapshot) => {
        const product: ProductDB = snapshot.val();
        subscriber.next(product);
      });
      return () => unsubscribeFn();
    });
  }

  getAllOrders(): Observable<OrderDB[]> {
    const productsRef = ref(this.db, '/orders')
    return new Observable(subscriber => {
      const unsubscribeFn = onValue(productsRef, (snapshot: DataSnapshot) => {
        const data = snapshot.val();
        const orderDBArray: OrderDB[] = [];
        orderDBArray.push(...data);
        subscriber.next(orderDBArray);
      });
      return () => unsubscribeFn();
    });
  }

  getOrder(id: string): Observable<OrderDB> {
    const productsRef = ref(this.db, `/orders/${id}`)// изменить на настоящий путь для заказа
    return new Observable(subscriber => {
      const unsubscribeFn = onValue(productsRef, (snapshot: DataSnapshot) => {
        // const data = snapshot.val();
        const order: OrderDB = snapshot.val();
        // productDBArray.push(product);
        subscriber.next(order);
      });
      return () => unsubscribeFn();
    });
  }

  createOrder(): OrderDB {
    const order: OrderDB = {
      id: 1,
      date: Date.now(),
      products: [
        {
          id: 'String',
          price: 100,
          vendorPrice: 50,
          size: 'String',
          color: 'String',
        }
      ],
      trackNumber: 'string',
      totalPrice: 200,
      deliveryInfo: {
        phoneNumber: 1111,
        firstName: 'String',
        lastName: 'String',
        fatherName: 'String',
        city: 'String',
        deliveryType: 'post-office',
        postNumber: 12,
        payback: 50,
      },
    }
    return order
  }
  setOrder(id: string, order: OrderDB): Observable<OrderDB> {
    const productsRef = ref(this.db, `/orders/${id}`)// изменить на настоящий путь для заказа
    console.log(id, order)
    const db = getDatabase();
    set(ref(db, 'orders/' + id), order);
    return new Observable(subscriber => {
      const unsubscribeFn = onValue(productsRef, (snapshot: DataSnapshot) => {
        // const data = snapshot.val();
        const order: OrderDB = snapshot.val();
        // productDBArray.push(product);
        subscriber.next(order);
      });
      return () => unsubscribeFn();
    });
  }
}


