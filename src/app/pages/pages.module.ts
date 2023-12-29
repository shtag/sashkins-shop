import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CartComponent } from './cart/cart.component';
import { HomeComponent } from './home/home.component';
import { DeliveryComponent } from './delivery/delivery.component';
import { CatalogComponent } from './catalog/catalog.component';
import { ProductComponent } from './product/product.component';
import { SharedModule } from '../shared/shared.module';
import { ContactsComponent } from './contacts/contacts.component';
import { RouterModule } from '@angular/router';
import { MaterialModule } from '../shared/material/material.module';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { ProcessingCardComponent } from './cart/processing-card/processing-card.component';



@NgModule({
  declarations: [
    CartComponent,
    HomeComponent,
    DeliveryComponent,
    CatalogComponent,
    ProductComponent,
    ContactsComponent,
    PageNotFoundComponent,
    ProcessingCardComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    SharedModule,
    MaterialModule,

  ],
  exports: [
    CartComponent,
    HomeComponent,
    DeliveryComponent,
    CatalogComponent,
    ProductComponent,
    ContactsComponent,
    PageNotFoundComponent,
    ProcessingCardComponent
  ]
})
export class PagesModule { }
