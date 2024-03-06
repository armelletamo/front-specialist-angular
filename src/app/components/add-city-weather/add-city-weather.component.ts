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
  @Output() onAddCityWeather = new EventEmitter<void>();

  addCityWeather() {
    this.onAddCityWeather.emit();
  }
}
