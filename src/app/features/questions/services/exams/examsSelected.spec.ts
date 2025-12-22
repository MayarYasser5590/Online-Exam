import { TestBed } from '@angular/core/testing';

import { ExamsSelectedService } from './examsSelected.service';

describe('ExamsSelectedService', () => {
  let service: ExamsSelectedService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ExamsSelectedService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
