import { Astro, Condition, Current, Giorno, Location, Meteo, Ora, Previsione } from './../models/previsione.model';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, map } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PrevisioniService {

  constructor(private http: HttpClient) { }

  baseUrl: string = 'http://api.weatherapi.com/v1/forecast.json?q=';
  private apiKey: string = '2f637ecccfcf4964b0f144420230306';

  private options = {
    headers: new HttpHeaders({
      'key': this.apiKey
    })
  }

  getMeteo(citta: string): Observable<Meteo>{
    return this.http.get(`${this.baseUrl}${citta}&days=5&lang=it`, this.options)
    .pipe(
      map((meteo: object) => {
        let loc = new Location(meteo['location']['name'], meteo['location']['region'], meteo['location']['country'], meteo['location']['tz_id']);
        let cond = new Condition(meteo['current'].condition.text, meteo['current'].condition.icon, meteo['current'].condition.code);
        let curr = new Current(meteo['current'].last_updated_epoch, meteo['current'].temp_c, cond, meteo['current'].wind_kph, meteo['current'].humidity, meteo['current'].feelslike_c);
        let prevArr: Previsione[] = [];
        for(let g of meteo['forecast'].forecastday){
          let condit = new Condition(g.day.condition.text, g.day.condition.icon, g.day.condition.code);
          let giorno = new Giorno(g.day.maxtemp_c, g.day.mintemp_c, g.day.avgtemp_c, g.day.maxwind_kph, g.day.totalprecip_mm, g.day.avghumidity, g.day.daily_chance_of_rain, condit);
          let astro = new Astro(g.astro.sunrise, g.astro.sunset, g.astro.moonrise, g.astro.moonset);
          let oreArr: Ora[] = [];
          for(let o of g.hour){
            let condOra = new Condition(o.condition.text, o.condition.icon, o.condition.code);
            let ora = new Ora(o.time_epoch, o.temp_c, condOra, o.wind_kph, o.precip_mm, o.humidity, o.feelslike_c, o.chance_of_rain);
            oreArr.push(ora);
          }
          let prev = new Previsione(g.date, giorno, astro, oreArr);
          prevArr.push(prev);
        }
        let meteoFinale: Meteo = new Meteo(
          loc,
          curr,
          prevArr
        )
        return meteoFinale;
      })

    )
  }
}
