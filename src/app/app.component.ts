import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { CityWeatherListComponent } from './components/city-weather-list/city-weather-list.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, CityWeatherListComponent ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'front-specialist-angular';
  constructor() { }

  ngOnInit(): void {
  }


}
