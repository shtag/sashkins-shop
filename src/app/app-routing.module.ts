import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CartComponent } from './pages/cart/cart.component';
import { HomeComponent } from './pages/home/home.component';
import { DeliveryComponent } from './pages/delivery/delivery.component';
import { CatalogComponent } from './pages/catalog/catalog.component';
import { ProductComponent } from './pages/product/product.component';
import { ContactsComponent } from './pages/contacts/contacts.component';

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
    component: CatalogComponent
  },
  {
    path: 'catalog/:id',
    component: ProductComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
