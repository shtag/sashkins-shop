import { TestBed } from '@angular/core/testing';

import { CreateTTNService } from './create-ttn.service';

describe('CreateTTNService', () => {
  let service: CreateTTNService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CreateTTNService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
