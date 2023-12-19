import { TestBed } from '@angular/core/testing';

import { CatalogRoutesService } from './catalog-routes.service';

describe('CatalogRoutesService', () => {
  let service: CatalogRoutesService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CatalogRoutesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
