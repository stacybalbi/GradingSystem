import { TestBed } from '@angular/core/testing';

import { DaylistService } from './daylist.service';

describe('DaylistService', () => {
  let service: DaylistService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DaylistService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
