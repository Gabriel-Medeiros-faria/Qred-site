import { TestBed } from '@angular/core/testing';

import { VerifyUuidService } from './verify-uuid.service';

describe('VerifyUuidService', () => {
  let service: VerifyUuidService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(VerifyUuidService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
