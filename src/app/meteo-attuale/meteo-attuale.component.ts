import { Component, Input, OnInit } from '@angular/core';
import { PrevisioniService } from '../shared/previsioni.service';
import { Meteo } from '../models/previsione.model';

@Component({
  selector: 'app-meteo-attuale',
  templateUrl: './meteo-attuale.component.html',
  styleUrls: ['./meteo-attuale.component.css']
})
export class MeteoAttualeComponent {

  citta: string;
  meteo: Meteo;

  constructor(private prevServ: PrevisioniService){}

  mostraAttuale(citta: string){
    this.prevServ.getMeteo(this.citta).subscribe(meteo => this.meteo = meteo)
  }




}
