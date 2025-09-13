import { TestBed } from '@angular/core/testing';

import { HospedeService } from './hospede';

describe('Hospede', () => {
  let service: HospedeService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(HospedeService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
