import { Component } from '@angular/core';
import { City } from '../../../models/city';
import { WeatherCityService } from '../../services/weather-city.service';
import { CityWeatherComponent } from '../city-weather/cityWeather.component';
import { CommonModule } from '@angular/common';
import { AddCityWeatherComponent } from '../add-city-weather/add-city-weather.component';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-city-weather-list',
  standalone: true,
  imports: [ CityWeatherComponent, CommonModule, AddCityWeatherComponent,  RouterLink],
  templateUrl: './city-weather-list.component.html',
  styleUrl: './city-weather-list.component.scss'
})
export class CityWeatherListComponent {
  cities: City[] | undefined;
  constructor(private weatherCityService: WeatherCityService) { }
  ngOnInit(): void {
    this.weatherCityService.getWeatherData().subscribe(data => {
      this.cities = data;
    });
  }

  handleAddCityWeather() {
    this.weatherCityService.addCityWeatherData();
  }

}
