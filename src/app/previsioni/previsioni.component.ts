import { HttpClient} from '@angular/common/http';
import { Component } from '@angular/core';
import { PrevisioniService } from '../shared/previsioni.service';
import { Meteo, Previsione } from '../models/previsione.model';


@Component({
  selector: 'app-previsioni',
  templateUrl: './previsioni.component.html',
  styleUrls: ['./previsioni.component.css']
})
export class PrevisioniComponent {

  constructor(private http: HttpClient, private previsioniServ: PrevisioniService){}

  citta: string;

  meteo: Meteo;

  mostraPrev(citta: string){
    this.previsioniServ.getMeteo(citta).subscribe(meteo => {
      this.meteo = meteo;
      console.log(this.meteo);
    })
  }

  extraInfo: boolean = false;
  panoramicaOn: boolean = false;
  oraPerOraOn: boolean = false;

  giornoSingolo: Previsione;

  mostraExtra(g: Previsione){

      this.extraInfo = true;
      this.panoramicaOn = true;
      this.oraPerOraOn = false;
      this.giornoSingolo = g;


  }

  mostraPanoramica(){
    if(this.oraPerOraOn = false){
       this.panoramicaOn = true;
    } else {
      this.oraPerOraOn = false;
      this.panoramicaOn = true;
    }

  }

  mostraOraPerOra(){
    if(this.panoramicaOn = false){
      this.oraPerOraOn = true;
    } else {
      this.panoramicaOn = false;
      this.oraPerOraOn = true;
    }

  }

}
