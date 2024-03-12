import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CityWeatherComponent } from './cityWeather.component';

describe('CitiesComponent', () => {
  let component: CityWeatherComponent;
  let fixture: ComponentFixture<CityWeatherComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CityWeatherComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CityWeatherComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
