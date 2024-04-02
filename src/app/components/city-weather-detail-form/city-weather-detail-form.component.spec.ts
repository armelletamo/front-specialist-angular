import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CityWeatherDetailFormComponent } from './city-weather-detail-form.component';

describe('CityWeatherDetailFormComponent', () => {
  let component: CityWeatherDetailFormComponent;
  let fixture: ComponentFixture<CityWeatherDetailFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CityWeatherDetailFormComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CityWeatherDetailFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
