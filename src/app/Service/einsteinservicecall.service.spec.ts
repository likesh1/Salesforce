import { TestBed, inject } from '@angular/core/testing';

import { EinsteinservicecallService } from './einsteinservicecall.service';

describe('EinsteinservicecallService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [EinsteinservicecallService]
    });
  });

  it('should be created', inject([EinsteinservicecallService], (service: EinsteinservicecallService) => {
    expect(service).toBeTruthy();
  }));
});
