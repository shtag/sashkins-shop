import { WarehouseInfo } from './../../shared/nova-post/model/city.np.model';
import { CommonModule } from '@angular/common';
import { AfterViewInit, Component } from '@angular/core';
import { FormControl, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { Observable, map } from 'rxjs';
import { CityInfo } from 'src/app/shared/nova-post/model/city.np.model';
import { NpWarehouseService } from 'src/app/shared/nova-post/np-warehouse.service';
import { SharedModule } from 'src/app/shared/shared.module';
import * as ls from 'lodash';
import { debounce } from './../../shared/debounce'

@Component({
  selector: 'app-checkout',
  standalone: true,
  imports: [
    FormsModule,
    SharedModule,
    ReactiveFormsModule,
    CommonModule
  ],
  templateUrl: './checkout.component.html',
  styleUrl: './checkout.component.scss'
})
export class CheckoutComponent implements AfterViewInit {
  controlCity = new FormControl('');
  controlWarehouse = new FormControl('');
  searchCity: Observable<CityInfo[]>;
  searchWarehouse: Observable<WarehouseInfo[]>;
  cityRef = ''
  warehouseRef = ''

  isWarehouseDisabled = true

  lastInput = 0;

  constructor(private npCity: NpWarehouseService) {
    this.controlWarehouse.disable()
    this.searchCity = this.npCity.findCity('').pipe(map(value => value.data))
    this.searchWarehouse = this.npCity.findWarehouse('', '').pipe(map(value => value.data))
    // this.searchWarehouse = this.npCity.findWarehouse('', '').pipe(map(value => value))
  }
  ngAfterViewInit() {
    console.log('vierwInit')


  }

  @debounce(300)
  filterCity() {
    if (Date.now() - this.lastInput < 1000) return
    const city = this.controlCity.value
    if (typeof city === 'string') {

      this.searchCity = this.npCity.findCity(city).pipe(map(value => value.data))
    }
    this.controlWarehouse.disable()
    this.controlWarehouse.setValue('')
  }

  private _filterWarehouse() {
    const city = this.cityRef
    console.log(city)
    const warehouse = this.controlWarehouse.value
    if (typeof warehouse === 'string' && typeof city === 'string') {
      this.searchWarehouse = this.npCity.findWarehouse(city, warehouse).pipe(map(value => value.data))
      this.npCity.findWarehouse(city, warehouse).subscribe(item => console.log(item.data))
    }
  }

  @debounce(300)
  filterWarehouse() {
    const city = this.cityRef
    const warehouse = this.controlWarehouse.value
    if (typeof warehouse === 'string' && typeof city === 'string') {
      this.searchWarehouse = this.npCity.findWarehouse(city, warehouse).pipe(map(value => value.data))
      this.npCity.findWarehouse(city, warehouse).subscribe(item => console.log(item.data))
    }

  }

  findCity(city: CityInfo) {
    console.log(city.Ref)
    this.cityRef = city.Ref
    this.filterWarehouse()
    this.controlWarehouse.enable()
  }

  resetCityValue() {
    this.cityRef = ''
    this.controlCity.reset()
    this.controlWarehouse.disable()
    this.searchCity = this.npCity.findCity('').pipe(map(value => value.data))
  }

}