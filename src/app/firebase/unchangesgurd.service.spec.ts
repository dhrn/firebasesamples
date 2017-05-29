import { TestBed, inject } from '@angular/core/testing';

import { UnchangesgurdService } from './unchangesgurd.service';

describe('UnchangesgurdService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [UnchangesgurdService]
    });
  });

  it('should be created', inject([UnchangesgurdService], (service: UnchangesgurdService) => {
    expect(service).toBeTruthy();
  }));
});
