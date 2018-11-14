import { TestBed } from '@angular/core/testing';

import { MetricDataService } from './metric-data-service.service';

describe('MetricDataServiceService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: MetricDataService = TestBed.get(MetricDataService);
    expect(service).toBeTruthy();
  });
});
