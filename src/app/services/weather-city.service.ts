import { Injectable } from '@angular/core';
import { City } from '../../models/city';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class WeatherCityService {

  constructor() { }

  private mockWeatherCityData: City[] = [
    {
      name: 'Tunisia',
      temperature: '20°',
      description: 'Cloudy',
      minTemp: '18°',
      maxTemp: '26°',
    },
    {
      name: 'Finland',
      temperature: '10°',
      description: 'Snowing',
      minTemp: '-15°',
      maxTemp: '12°',
    },
  ];

  public getWeatherData(): Observable<City[]> {
    return of(this.mockWeatherCityData);
  }

  // Function to add mock weather data
  public addCityWeatherData(newCityWeather: City): void {
    this.mockWeatherCityData.push(newCityWeather);
  }
}
