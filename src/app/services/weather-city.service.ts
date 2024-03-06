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

  private WeatherCityDataListToUse: City[] = [
    {
      name: 'Cameroon',
      temperature: '28°',
      description: 'Sunny',
      minTemp: '22°',
      maxTemp: '30°',
    },
    {
      name: 'New York',
      temperature: '10°',
      description: 'Storm',
      minTemp: '-15°',
      maxTemp: '12°',
    },
    {
      name: 'São Paulo',
      temperature: '5°',
      description: 'Rain',
      minTemp: '-3°',
      maxTemp: '10°',
    },
  ];

  public getWeatherData(): Observable<City[]> {
    return of(this.mockWeatherCityData);
  }

  // Function to add mock weather data
  public addCityWeatherData(): void {
    let notIncludedCityWeather = this.WeatherCityDataListToUse.filter(x =>
      this.mockWeatherCityData.filter(y => y.name === x.name).length === 0);

    if (notIncludedCityWeather.length > 0) {
      this.mockWeatherCityData.push(notIncludedCityWeather[0]);
    }
  }
}
