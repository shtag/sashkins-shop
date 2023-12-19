import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CartComponent } from './pages/cart/cart.component';
import { HomeComponent } from './pages/home/home.component';
import { DeliveryComponent } from './pages/delivery/delivery.component';
import { CatalogComponent } from './pages/catalog/catalog.component';
import { ProductComponent } from './pages/product/product.component';
import { ContactsComponent } from './pages/contacts/contacts.component';
import { PageNotFoundComponent } from './pages/page-not-found/page-not-found.component';

const routes: Routes = [
  {
    path: '',
    component: HomeComponent
  },
  {
    path: 'cart',
    component: CartComponent
  },
  {
    path: 'delivery',
    component: DeliveryComponent
  },
  {
    path: 'contacts',
    component: ContactsComponent
  },
  {
    path: 'catalog',
    title: 'Каталог',
    component: CatalogComponent
  },
  {
    path: 'product/:id',
    component: ProductComponent
  },
  {
    path: 'page-not-found',
    component: PageNotFoundComponent
  },
  {
    path: '**',
    component: PageNotFoundComponent
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
