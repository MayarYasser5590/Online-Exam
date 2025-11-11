import { TestBed } from '@angular/core/testing';
import { CanActivateFn } from '@angular/router';

import { forgetFlowGuard } from './forget-flow-guard';

describe('forgetFlowGuard', () => {
  const executeGuard: CanActivateFn = (...guardParameters) => 
      TestBed.runInInjectionContext(() => forgetFlowGuard(...guardParameters));

  beforeEach(() => {
    TestBed.configureTestingModule({});
  });

  it('should be created', () => {
    expect(executeGuard).toBeTruthy();
  });
});
