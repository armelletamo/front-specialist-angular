import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddCityWeatherComponent } from './add-city-weather.component';

describe('AddCityWeatherComponent', () => {
  let component: AddCityWeatherComponent;
  let fixture: ComponentFixture<AddCityWeatherComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AddCityWeatherComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(AddCityWeatherComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
