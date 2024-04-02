import { Routes } from '@angular/router';
import { CityWeatherDetailComponent } from './components/city-weather-detail/city-weather-detail.component';
import { CityWeatherListComponent } from './components/city-weather-list/city-weather-list.component';
import { CityWeatherDetailFormComponent } from './components/city-weather-detail-form/city-weather-detail-form.component';

export const routes: Routes = [
    { path: '', component: CityWeatherListComponent },
    { path: 'WeatherDetail/:cityName', component: CityWeatherDetailComponent },
    { path: 'AddWeatherDetail', component: CityWeatherDetailFormComponent }
];
