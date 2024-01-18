import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { CityResponse } from './model/city.np.model';

@Injectable({
  providedIn: 'root'
})
export class NpWarehouseService {

  constructor(private http: HttpClient) { }

  findCity(city: string) {
    console.log('getAllTTN')
    const options = {
      "apiKey": "9c5cd30027c22bbcaf546070ab038f97",
      "modelName": "Address",
      "calledMethod": "getCities",
      "methodProperties": {
        "Page": "1",
        "FindByString": city,
        "Limit": "100"
      }

    }
    return this.http.post<CityResponse>('https://api.novaposhta.ua/v2.0/json/', options)
  }
  findWarehouse(sity: string, postNumber: string) {
    console.log('getAllTTN')
    const options = {
      "apiKey": "9c5cd30027c22bbcaf546070ab038f97",
      "modelName": "Address",
      "calledMethod": "getWarehouses",
      "methodProperties": {
        "FindByString": postNumber,
        "CityName": "",
        "CityRef": sity,
        "Page": "1",
        "Limit": "50",
        "Language": "UA",
        // "TypeOfWarehouseRef": "00000000-0000-0000-0000-000000000000",
        // "WarehouseId": postNumber
      }

    }
    return this.http.post('https://api.novaposhta.ua/v2.0/json/', options)
  }
}
