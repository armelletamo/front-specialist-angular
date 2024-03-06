import { Component, EventEmitter, Output } from '@angular/core';
import { City } from '../../../models/city';

@Component({
  selector: 'app-add-city-weather',
  standalone: true,
  imports: [],
  templateUrl: './add-city-weather.component.html',
  styleUrl: './add-city-weather.component.scss'
})
export class AddCityWeatherComponent {
  @Output() onAddCityWeather = new EventEmitter<City>();
  addCityWeather() {
    let newCityWeather = {
      name: 'Cameroon',
      temperature: '28°',
      description: 'Sunny',
      minTemp: '22°',
      maxTemp: '30°',
    }
    this.onAddCityWeather.emit(newCityWeather);
  }
}
