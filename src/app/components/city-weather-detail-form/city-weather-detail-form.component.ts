import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { City } from '../../../models/city';
import { WeatherCityService } from '../../services/weather-city.service';

@Component({
  selector: 'app-city-weather-detail-form',
  standalone: true,
  imports: [ReactiveFormsModule, CommonModule],
  templateUrl: './city-weather-detail-form.component.html',
  styleUrl: './city-weather-detail-form.component.scss'
})
export class CityWeatherDetailFormComponent {

  cityForm: FormGroup;
  constructor(private weatherCityService: WeatherCityService) {
    this.cityForm = new FormGroup({
      name: new FormControl<string>('', [Validators.required, Validators.minLength(2)]),
      temperature: new FormControl('', Validators.required),
      description: new FormControl('', [Validators.required, Validators.minLength(5)]),
      minTemp: new FormControl('', Validators.required),
      maxTemp: new FormControl('', Validators.required),
      image: new FormControl(''),
      wind: new FormControl('', Validators.required),
      humidity: new FormControl('', Validators.required)
    });
  }

  get form() { return this.cityForm.controls; }

  onSubmit() {
    if (this.cityForm.valid) {
      const city: City = this.cityForm.value as City;
      console.log(city);
      this.weatherCityService.addCityWeatherDataToLocalStorage(city);
    } else {
      console.log('Form is not valid');
    }
  }
}


