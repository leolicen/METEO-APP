import { Component, Input, OnInit } from '@angular/core';
import { Ora, Previsione } from 'src/app/models/previsione.model';

@Component({
  selector: 'app-meteo-ora-per-ora',
  templateUrl: './meteo-ora-per-ora.component.html',
  styleUrls: ['./meteo-ora-per-ora.component.css']
})
export class MeteoOraPerOraComponent {

  @Input() giornoSingolo: Previsione;


}
