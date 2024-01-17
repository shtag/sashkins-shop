import { TestBed } from '@angular/core/testing';

import { NpCounterpartyService } from './np-counterparty.service';

describe('NpCounterpartyService', () => {
  let service: NpCounterpartyService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(NpCounterpartyService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
