import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { CityResponse, WarehouseResponse } from './model/city.np.model';

@Injectable({
  providedIn: 'root'
})
export class NpWarehouseService {
  lastInput = 0
  constructor(private http: HttpClient) { }


  debounce() {

  }

  findCity(city: string) {
    console.log('findCity')
    this.lastInput = Date.now()
    // if (this.lastInput - Date.now() < 300) return

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
  findWarehouse(sityRef: string, postNumber: string) {
    console.log('findWarehouse')
    const options = {
      "apiKey": "9c5cd30027c22bbcaf546070ab038f97",
      "modelName": "Address",
      "calledMethod": "getWarehouses",
      "methodProperties": {
        "FindByString": postNumber,
        // "CityName": "Запоріжжя",
        "CityRef": sityRef,
        "Page": "1",
        "Limit": "50",
        "Language": "UA",
        // "WarehouseId": postNumber,
        // "TypeOfWarehouseRef": "841339c7-591a-42e2-8233-7a0a00f0ed6f",
        // "WarehouseId": postNumber,"841339c7-591a-42e2-8233-7a0a00f0ed6f" . отделение
        // PostMachineType: 'FullDayService' "f9316480-5f2d-425d-bc2c-ac7cd29decf0" почтамт
      }

    }
    return this.http.post<WarehouseResponse>('https://api.novaposhta.ua/v2.0/json/', options)
  }
}