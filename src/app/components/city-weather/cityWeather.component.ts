import { Component, Input } from '@angular/core';
import { City } from '../../../models/city';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-city-weather',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './cityWeather.component.html',
  styleUrl: './cityWeather.component.scss'
})
export class CityWeatherComponent {
  @Input() city: City | undefined;
}
