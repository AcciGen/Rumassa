import { TestBed } from '@angular/core/testing';

import { NovostiService } from './novosti.service';

describe('NovostiService', () => {
  let service: NovostiService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(NovostiService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
