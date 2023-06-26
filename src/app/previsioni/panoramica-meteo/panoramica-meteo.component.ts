import { Component, Input } from '@angular/core';
import { Meteo, Previsione } from 'src/app/models/previsione.model';

@Component({
  selector: 'app-panoramica-meteo',
  templateUrl: './panoramica-meteo.component.html',
  styleUrls: ['./panoramica-meteo.component.css']
})
export class PanoramicaMeteoComponent {

  @Input() giornoSingolo: Previsione;
}
