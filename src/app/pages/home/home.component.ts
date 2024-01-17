

import { Component, OnInit } from '@angular/core';
import { DateAdapter } from '@angular/material/core';
import { Observable } from 'rxjs';
import ProductDB from 'src/app/model/db.product.model';
import { DatabaseService } from 'src/app/shared/database.service';
import { CreateTTNService } from 'src/app/shared/nova-post/create-ttn.service';
import { NpCounterpartyService } from 'src/app/shared/nova-post/np-counterparty.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  result: Observable<ProductDB[]>;
  res = '';

  constructor(
    private db: DatabaseService,
    private np: CreateTTNService,
    private _adapter: DateAdapter<string>,
    private npAgent: NpCounterpartyService
  ) {
    this.result = this.db.getAllProducts()
    this.result.subscribe(item => this.res = JSON.stringify(item))
    this._adapter.setLocale('ua');
  }

  ngOnInit(): void {
    console.log('onInit')
  }

  getAllProducts() {
    this.db.getAllProducts().subscribe(item => console.log(item))
  }

  getAllTTN(a: string, b: string) {
    console.log('getAllTTn')
    console.log(a, b)
    this.np.getAllTTN(a, b)
  }

  createTTN() {
    console.log('Create TTN')
    this.np.createTTN().subscribe(res => console.log(res))
  }
  createSender() {
    console.log('createSender')
    this.npAgent.createAgent('Sender').subscribe(item => console.log(item))
  }
  createRecipient() {
    console.log('createRecipient')

    this.npAgent.getContact().subscribe(item => console.log(item))
    this.npAgent.createAgent('Recipient').subscribe(item => console.log(item))
  }
  getAllRecipient() {
    console.log('getAllAgents')
    this.npAgent.getAllRecipients().subscribe(item => console.log(item))
  }
  getAllSender() {
    console.log('getAllAgents')
    this.npAgent.getAllSenders().subscribe(item => console.log(item))
  }


}