import { TestBed } from '@angular/core/testing';

import { AreaRestritaService } from './area-restrita.service';

describe('AreaRestritaService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: AreaRestritaService = TestBed.get(AreaRestritaService);
    expect(service).toBeTruthy();
  });
});
