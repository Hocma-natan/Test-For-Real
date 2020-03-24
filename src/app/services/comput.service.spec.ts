import { TestBed } from '@angular/core/testing';

import { ComputService } from './comput.service';

describe('ComputService', () => {
  let service: ComputService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ComputService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
