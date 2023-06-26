
export class Meteo {
  location: Location;
  current: Current;
  previsioni: Previsione[];

  constructor(location: Location, current: Current, previsioni: Previsione[]){
    this.location = location;
    this.current = current;
    this.previsioni = previsioni;
  }
}


export class Location {
  name: string;
  region: string;
  country: string;
  timezone: string

  constructor(name: string, region: string, country: string, timezone: string) {
    this.name = name;
    this.region = region;
    this.country = country;
    this.timezone = timezone
  }
}


export class Current {
  last_updated: number;
  temperatura: number;
  condition: Condition;
  velocitaVento: number;
  umidita: number;
  tempPerc: number;

  constructor(last_updated: number, temperatura: number, condition: Condition, velocitaVento: number, umidita: number, tempPerc: number){
    this.last_updated = last_updated;
    this.temperatura = temperatura;
    this.condition = condition;
    this.velocitaVento = velocitaVento;
    this.umidita = umidita;
    this.tempPerc = tempPerc;
  }
}

export class Condition {
  text: string;
  icon: string;
  code: number

  constructor(text: string, icon: string, code: number){
    this.text = text;
    this.icon = icon;
    this.code = code;
  }
}

export class Previsione {
  data: string;
  giorno: Giorno;
  astro: Astro;
  ore: Ora[];

  constructor(data: string, giorno: Giorno, astro: Astro, ore: Ora[]){
    this.data = data;
    this.giorno = giorno;
    this.astro = astro;
    this.ore = ore;
  }
}

export class Giorno {
  maxTemp: number;
  minTemp: number;
  avgTemp: number;
  maxWind: number;
  totPrecipitazioni: number;
  avgUmidita: number;
  probabilitaPioggia: number;
  condition: Condition;

  constructor(maxTemp: number, minTemp: number, avgTemp: number, maxWind: number, totPrecip: number, avgUmidita: number, probabPioggia: number, condition: Condition){
    this.maxTemp = maxTemp;
    this.minTemp = minTemp;
    this.avgTemp = avgTemp;
    this.maxWind = maxWind;
    this.totPrecipitazioni = totPrecip;
    this.avgUmidita = avgUmidita;
    this.probabilitaPioggia = probabPioggia;
    this.condition = condition;
  }
}

export class Astro {
  alba: string;
  tramonto: string;
  albaLuna: string;
  tramontoLuna: string;

  constructor(alba: string, tramonto: string, albaLuna: string, tramontoLuna: string){
    this.alba = alba;
    this.tramonto = tramonto;
    this.albaLuna = albaLuna;
    this.tramontoLuna = tramontoLuna;
  }
}

export class Ora {
  time: number;
  temperatura: number;
  condition: Condition;
  velocitaVento: number;
  totPrecipitazioni: number;
  umidita: number;
  tempPercepita: number;
  probabilitaPioggia: number;

  constructor(time: number, temperatura: number, condition: Condition, velocitaVento: number, totPrecip: number,umidita: number, tempPercepita: number, probPioggia: number){
    this.time = time;
    this.temperatura = temperatura;
    this.condition = condition;
    this.velocitaVento = velocitaVento;
    this.totPrecipitazioni = totPrecip;
    this.umidita = umidita;
    this.tempPercepita = tempPercepita;
    this.probabilitaPioggia = probPioggia;
  }
}
