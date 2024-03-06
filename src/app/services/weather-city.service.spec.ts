import { TestBed } from '@angular/core/testing';

import { WeatherCityService } from './weather-city.service';

describe('WeatherCityService', () => {
  let service: WeatherCityService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(WeatherCityService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
