import { Injectable } from '@angular/core';
import { CounterpartyResponse } from './model/counterparty.np.model';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class NpCounterpartyService {

  constructor(private http: HttpClient) { }

  getAllSenders() {
    const options = {
      "apiKey": "9c5cd30027c22bbcaf546070ab038f97",
      "modelName": "Counterparty",
      "calledMethod": "getCounterparties",
      "methodProperties": {
        "CounterpartyProperty": "Sender",
        "Page": "1"
      }
    }
    return this.http.post<CounterpartyResponse>('https://api.novaposhta.ua/v2.0/json/', options)
  }
  getAllRecipients() {
    const options = {
      "apiKey": "9c5cd30027c22bbcaf546070ab038f97",
      "modelName": "Counterparty",
      "calledMethod": "getCounterparties",
      "methodProperties": {
        "CounterpartyProperty": "Recipient",
        "Page": "1"
      }
    }
    return this.http.post<CounterpartyResponse>('https://api.novaposhta.ua/v2.0/json/', options)
  }
  createAgent(type: 'Sender' | 'Recipient') {
    const options = {
      "apiKey": "9c5cd30027c22bbcaf546070ab038f97",
      "modelName": "Counterparty",
      "calledMethod": "save",
      "methodProperties": {
        "FirstName": "Василь",
        "MiddleName": "",
        "LastName": "Каніщев",
        "Phone": "380959039212",
        "Email": "",
        "CounterpartyType": "PrivatePerson",
        "CounterpartyProperty": type
      }
    }

    // this.http.post<CounterpartyResponse>('https://api.novaposhta.ua/v2.0/json/', options).subscribe(item => {
    //   const opt = {
    //     "apiKey": "9c5cd30027c22bbcaf546070ab038f97",
    //     "modelName": "ContactPerson",
    //     "calledMethod": "save",
    //     "methodProperties": {
    //       "CounterpartyRef": item.data[0].Ref,
    //       "FirstName": "Іван",
    //       "LastName": "Іванов",
    //       "MiddleName": "Іванович",
    //       "Phone": "380997979789"
    //     }
    //   }
    //   return this.http.post('https://api.novaposhta.ua/v2.0/json/', opt)
    // })
    return this.http.post<CounterpartyResponse>('https://api.novaposhta.ua/v2.0/json/', options)
  }
  getContact() {
    const options = {
      "apiKey": '9c5cd30027c22bbcaf546070ab038f97',
      "modelName": "Counterparty",
      "calledMethod": "getCounterpartyContactPersons",
      "methodProperties": {
        "Ref": "8d9312b4-86c0-11e8-8b24-005056881c6b",
        "Page": "1"
      }
    }
    return this.http.post<CounterpartyResponse>('https://api.novaposhta.ua/v2.0/json/', options)
  }
}
