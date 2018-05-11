import { TestBed, async, inject } from '@angular/core/testing';

import { LoggedinGuardGuard } from './loggedin-guard.guard';

describe('LoggedinGuardGuard', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [LoggedinGuardGuard]
    });
  });

  it('should ...', inject([LoggedinGuardGuard], (guard: LoggedinGuardGuard) => {
    expect(guard).toBeTruthy();
  }));
});
