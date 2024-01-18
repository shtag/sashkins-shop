import { CommonModule } from '@angular/common';
import { AfterViewInit, Component, OnInit } from '@angular/core';
import { FormControl, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { Observable, map, startWith } from 'rxjs';
import { CityInfo, CityResponse } from 'src/app/shared/nova-post/model/city.np.model';
import { NpWarehouseService } from 'src/app/shared/nova-post/np-warehouse.service';
import { SharedModule } from 'src/app/shared/shared.module';

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
export class CheckoutComponent {
  myControl = new FormControl('');
  warehouseNumber = new FormControl('');
  options: Observable<CityInfo[]>
  sityRef = ''

  constructor(private npCity: NpWarehouseService) {
    this.options = this.npCity.findCity('').pipe(map(value => value.data))
  }

  filter() {
    const val = this.myControl.value
    if (typeof val === 'string') {

      this.options = this.npCity.findCity(val).pipe(map(value => value.data))
    }
  }

  findCity() {
    console.log(this.sityRef)

  }
  findWarehouse() {
    this.npCity.findWarehouse(this.sityRef, this.warehouseNumber.value as string).subscribe(item => console.log(item))

  }
}
