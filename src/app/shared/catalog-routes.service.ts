import { Injectable } from '@angular/core';
import { Routes } from '@angular/router';
import { Observable, map } from 'rxjs';
import { DatabaseService } from './database.service';
import { ProductComponent } from '../pages/product/product.component';
import { PageNotFoundComponent } from '../pages/page-not-found/page-not-found.component';

@Injectable({
  providedIn: 'root'
})
export class CatalogRoutesService {

  constructor(private db: DatabaseService) { }

  getCatalogRoutes(): Observable<Routes> {
    return this.db.getAllProducts().pipe(
      map(routeString =>
        // Convert server response to an array of route objects
        routeString.map(route => ({
          path: `/catalog/${route.id}`,
          component: ProductComponent,
        }))
      )
    );
  }
}

// const routes: Routes = [
//   { path: '', loadChildren: () => import('./catalog.module').then(m => m.CatalogModule) },
//   { path: '**', component: PageNotFoundComponent },
// ];
