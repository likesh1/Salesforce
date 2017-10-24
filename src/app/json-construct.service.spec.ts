import { TestBed, inject } from '@angular/core/testing';

import { JsonConstructService } from './json-construct.service';

describe('JsonConstructService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [JsonConstructService]
    });
  });

  it('should be created', inject([JsonConstructService], (service: JsonConstructService) => {
    expect(service).toBeTruthy();
  }));
});
