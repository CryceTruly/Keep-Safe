import { TestBed, async, inject } from '@angular/core/testing';

import { LoggedOutGuardGuard } from './logged-out-guard.guard';

describe('LoggedOutGuardGuard', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [LoggedOutGuardGuard]
    });
  });

  it('should ...', inject([LoggedOutGuardGuard], (guard: LoggedOutGuardGuard) => {
    expect(guard).toBeTruthy();
  }));
});
