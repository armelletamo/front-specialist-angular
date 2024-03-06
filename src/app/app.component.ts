import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { City } from '../models/city';
import { CommonModule } from '@angular/common';
import { WeatherCityService } from './services/weather-city.service';
import { CityWeatherComponent } from './components/cities-weather-list/cityWeather.component';
import { AddCityWeatherComponent } from './components/add-city-weather/add-city-weather.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, CityWeatherComponent, CommonModule, AddCityWeatherComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  cities: City[] | undefined;
  title = 'front-specialist-angular';
  constructor(private weatherCityService: WeatherCityService) { }

  ngOnInit(): void {
    this.weatherCityService.getWeatherData().subscribe(data => {
      this.cities = data;
    });
  }

  handleAddCityWeather(data: City) {
    this.weatherCityService.addCityWeatherData(data);
  }

}
