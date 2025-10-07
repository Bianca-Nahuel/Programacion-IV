import { TestBed } from '@angular/core/testing';
import { CanActivateFn } from '@angular/router';

import { noPathGuardGuard } from './no-path-guard-guard';

describe('noPathGuardGuard', () => {
  const executeGuard: CanActivateFn = (...guardParameters) => 
      TestBed.runInInjectionContext(() => noPathGuardGuard(...guardParameters));

  beforeEach(() => {
    TestBed.configureTestingModule({});
  });

  it('should be created', () => {
    expect(executeGuard).toBeTruthy();
  });
});
