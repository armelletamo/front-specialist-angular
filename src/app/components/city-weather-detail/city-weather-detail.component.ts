import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { WeatherCityService } from '../../services/weather-city.service';
import { City } from '../../../models/city';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-city-weather-detail',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './city-weather-detail.component.html',
  styleUrl: './city-weather-detail.component.scss'
})

export class CityWeatherDetailComponent {
  cityWeather: City | undefined;
  constructor(
    private route: ActivatedRoute, private weatherCityService: WeatherCityService) { }

  ngOnInit() {
    const cityName = this.route.snapshot.paramMap.get('cityName');
    this.weatherCityService.getWeatherData().subscribe(data => {
      this.cityWeather = data.find(x => x.name === cityName);
    });
  }
}
