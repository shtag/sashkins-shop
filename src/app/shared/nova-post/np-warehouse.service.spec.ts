import { TestBed } from '@angular/core/testing';

import { NpWarehouseService } from './np-warehouse.service';

describe('NpWarehouseService', () => {
  let service: NpWarehouseService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(NpWarehouseService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
