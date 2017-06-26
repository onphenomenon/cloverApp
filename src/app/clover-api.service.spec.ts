import { TestBed, inject } from '@angular/core/testing';

import { CloverApiService } from './clover-api.service';

describe('CloverApiService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [CloverApiService]
    });
  });

  it('should be created', inject([CloverApiService], (service: CloverApiService) => {
    expect(service).toBeTruthy();
  }));
});
