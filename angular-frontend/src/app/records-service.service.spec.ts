import { TestBed } from '@angular/core/testing';

import { RecordsServiceService } from './records-service.service';

describe('RecordsServiceService', () => {
  let service: RecordsServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(RecordsServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
