import { TestBed } from '@angular/core/testing';

import { SpeciatiliesService } from './speciatilies.service';

describe('SpeciatiliesService', () => {
  let service: SpeciatiliesService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SpeciatiliesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
