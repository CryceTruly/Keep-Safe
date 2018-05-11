import { TestBed, async, inject } from '@angular/core/testing';

import { LogginGuardGuard } from './loggin-guard.guard';

describe('LogginGuardGuard', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [LogginGuardGuard]
    });
  });

  it('should ...', inject([LogginGuardGuard], (guard: LogginGuardGuard) => {
    expect(guard).toBeTruthy();
  }));
});
