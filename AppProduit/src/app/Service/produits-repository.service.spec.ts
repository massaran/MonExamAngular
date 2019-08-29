import { TestBed } from '@angular/core/testing';

import { ProduitsRepositoryService } from './produits-repository.service';

describe('ProduitsRepositoryService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ProduitsRepositoryService = TestBed.get(ProduitsRepositoryService);
    expect(service).toBeTruthy();
  });
});
