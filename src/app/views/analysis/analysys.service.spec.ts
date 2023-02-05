import { TestBed } from '@angular/core/testing';

import { AnalysysService } from './analysys.service';

describe('AnalysysService', () => {
  let service: AnalysysService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AnalysysService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
