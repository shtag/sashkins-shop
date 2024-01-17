import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { CreateParcelReq, CreateParcelRes } from './model/delivery-np.model';

@Injectable({
  providedIn: 'root'
})
export class NpTtnService {

  constructor(private http: HttpClient) { }

  create() {
    console.log('getAllTTN')
    const today = new Date().toJSON().slice(0, 10).split('-').reverse().join('.');
    const options: CreateParcelReq = {
      "apiKey": "9c5cd30027c22bbcaf546070ab038f97",
      "modelName": "InternetDocument",
      "calledMethod": "save",
      "methodProperties": {
        "PayerType": "Recipient",
        "PaymentMethod": "Cash",
        "DateTime": today,
        "CargoType": "Parcel",
        "Weight": "1",
        "ServiceType": "WarehouseWarehouse",
        "SeatsAmount": "1",
        "Description": "Одяг",
        "Cost": "899",
        "CitySender": "db5c88c6-391c-11dd-90d9-001a92567626", // zp
        "Sender": "8d9312b4-86c0-11e8-8b24-005056881c6b", // olyynik oleksandra
        "SenderAddress": "1ec09d1a-e1c2-11e3-8c4a-0050568002cf", // number 6 ZP
        "ContactSender": "93d393aa-18f4-11e9-8b24-005056881c6b", // olyynik oleksandra
        "SendersPhone": "380633993454",
        "RecipientsPhone": "380959039212",
        "NewAddress": "1",
        "RecipientCityName": "Київ",
        "RecipientArea": "",
        "RecipientAreaRegions": "",
        "RecipientAddressName": "2",
        "RecipientHouse": "",
        "RecipientFlat": "",
        "RecipientName": "Каніщев Василь",
        "RecipientType": "PrivatePerson",
        "SettlementType": "місто",
        "EDRPOU": "",
        "RecipientContactName": "Каніщев Василь",
        "BackwardDeliveryData":
          [{
            "PayerType": "Recipient",
            "CargoType": "Money",
            "RedeliveryString": "255"
          }],
        "OptionsSeat": [
          {
            "volumetricVolume": "1",
            "volumetricWidth": "16",
            "volumetricLength": "23",
            "volumetricHeight": "10",
            "weight": "1"
          }
        ]
      }
    }
    return this.http.post<CreateParcelRes>('https://api.novaposhta.ua/v2.0/json/', options)
  }
}
