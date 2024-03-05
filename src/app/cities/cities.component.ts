import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-cities',
  standalone: true,
  imports: [],
  templateUrl: './cities.component.html',
  styleUrl: './cities.component.scss'
})
export class CitiesComponent {
  @Input() country: string | undefined;
  @Input() temp: string | undefined;
  @Input() tempMax: string | undefined;
  @Input() tempMin: string | undefined;
  @Input() weather: string | undefined;
}
