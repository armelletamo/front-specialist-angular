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
      wind:'9 km',
      humidity:'30%',
      image:'background-image:url(/assets/img/tunis.svg)',
      weekWeather:[
        {
          day:'Monday',
          temperature:'16',
          description:'Cloudy'
        },
        {
          day:'Tuesday',
          temperature:'18',
          description:'Rain'
        },
        {
          day:'Wednesday',
          temperature:'20',
          description:'Sunny'
        },
        {
          day:'Thursday',
          temperature:'10',
          description:'Storm'
        },
        {
          day:'Friday',
          temperature:'-1',
          description:'Snowing'
        }
      ]
    },
    {
      name: 'France',
      temperature: '10°',
      description: 'Snowing',
      minTemp: '-15°',
      maxTemp: '12°',
      wind:'15 km',
      humidity:'65%',
      image:'background-image:url(/assets/img/france.svg)',
      weekWeather:[
        {
          day:'Monday',
          temperature:'16',
          description:'Cloudy'
        },
        {
          day:'Tuesday',
          temperature:'18',
          description:'Rain'
        },
        {
          day:'Wednesday',
          temperature:'20',
          description:'Sunny'
        },
        {
          day:'Thursday',
          temperature:'10',
          description:'Storm'
        },
        {
          day:'Friday',
          temperature:'-1',
          description:'Snowing'
        }
      ]
    },
  ];

  private WeatherCityDataListToUse: City[] = [
    {
      name: 'Cameroon',
      temperature: '28°',
      description: 'Sunny',
      minTemp: '22°',
      maxTemp: '30°',
      wind:'12 km',
      humidity:'64%',
      image:'background-image:url(/assets/img/rabat.svg)',
      weekWeather:[
        {
          day:'Monday',
          temperature:'16',
          description:'Cloudy'
        },
        {
          day:'Tuesday',
          temperature:'18',
          description:'Rain'
        },
        {
          day:'Wednesday',
          temperature:'20',
          description:'Sunny'
        },
        {
          day:'Thursday',
          temperature:'10',
          description:'Storm'
        },
        {
          day:'Friday',
          temperature:'-1',
          description:'Snowing'
        }
      ]
    },
    {
      name: 'New York',
      temperature: '10°',
      description: 'Storm',
      minTemp: '-15°',
      maxTemp: '12°',
      wind:'20 km',
      humidity:'20%',
      image:'background-image:url(/assets/img/qatar.svg)',
      weekWeather:[
        {
          day:'Monday',
          temperature:'16',
          description:'Cloudy'
        },
        {
          day:'Tuesday',
          temperature:'18',
          description:'Rain'
        },
        {
          day:'Wednesday',
          temperature:'20',
          description:'Sunny'
        },
        {
          day:'Thursday',
          temperature:'10',
          description:'Storm'
        },
        {
          day:'Friday',
          temperature:'-1',
          description:'Snowing'
        }
      ]
    },
    {
      name: 'São Paulo',
      temperature: '5°',
      description: 'Rain',
      minTemp: '-3°',
      maxTemp: '10°',
      wind:'8 km',
      humidity:'56%',
      image:'background-image:url(/assets/img/rabat.svg)',
      weekWeather:[
        {
          day:'Monday',
          temperature:'16',
          description:'Cloudy'
        },
        {
          day:'Tuesday',
          temperature:'18',
          description:'Rain'
        },
        {
          day:'Wednesday',
          temperature:'20',
          description:'Sunny'
        },
        {
          day:'Thursday',
          temperature:'10',
          description:'Storm'
        },
        {
          day:'Friday',
          temperature:'-1',
          description:'Snowing'
        }
      ]
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
