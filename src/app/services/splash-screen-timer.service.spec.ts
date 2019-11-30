import { TestBed } from '@angular/core/testing';

import { SplashScreenTimerService } from './splash-screen-timer.service';

describe('SplashScreenTimerService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: SplashScreenTimerService = TestBed.get(SplashScreenTimerService);
    expect(service).toBeTruthy();
  });
});
