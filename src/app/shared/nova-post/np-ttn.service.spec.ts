import { TestBed } from '@angular/core/testing';

import { NpTtnService } from './np-ttn.service';

describe('NpTtnService', () => {
  let service: NpTtnService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(NpTtnService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
