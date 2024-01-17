import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CartComponent } from './pages/cart/cart.component';
import { HomeComponent } from './pages/home/home.component';
import { DeliveryComponent } from './pages/delivery/delivery.component';
import { CatalogComponent } from './pages/catalog/catalog.component';
import { ProductComponent } from './pages/product/product.component';
import { ContactsComponent } from './pages/contacts/contacts.component';
import { PageNotFoundComponent } from './pages/page-not-found/page-not-found.component';
import { LoginComponent } from './pages/login/login.component';

const routes: Routes = [
  {
    path: '',
    title: 'sashkins.shop',
    component: HomeComponent
  },
  {
    path: 'cart',
    title: 'Кошик',
    component: CartComponent
  },
  {
    path: 'delivery',
    title: 'Доставка',
    component: DeliveryComponent
  },
  {
    path: 'contacts',
    title: 'Контакти',
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
    title: '404',
    component: PageNotFoundComponent
  },
  {
    path: 'login',
    title: 'Login',
    component: LoginComponent
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
