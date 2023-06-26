import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ContattiComponent } from './contatti/contatti.component';
import { HomeComponent } from './home/home.component';
import { PrevisioniComponent } from './previsioni/previsioni.component';
import { MeteoAttualeComponent } from './meteo-attuale/meteo-attuale.component';
import { MeteoOraPerOraComponent } from './previsioni/meteo-ora-per-ora/meteo-ora-per-ora.component';
import { PanoramicaMeteoComponent } from './previsioni/panoramica-meteo/panoramica-meteo.component';

const routes: Routes = [
  {path: "", component: HomeComponent},
  {path: "previsioni", component: PrevisioniComponent},
  {path: "meteo-attuale", component: MeteoAttualeComponent},
  {path: "contattaci", component: ContattiComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
