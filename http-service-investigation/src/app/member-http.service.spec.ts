import { TestBed } from '@angular/core/testing';

import { MemberHttpService } from './member-http.service';

describe('HttpTestService', () => {
  let service: MemberHttpService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MemberHttpService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
