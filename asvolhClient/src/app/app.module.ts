import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
/*Agregando componentes creados*/
import { QuienesSomosComponent } from './quienes-somos/quienes-somos.component';
import { NoticiasComponent } from './noticias/noticias.component';
import { LoginComponent } from './login/login.component';
import { EquipoDesarrolloComponent } from './equipo-desarrollo/equipo-desarrollo.component';
import { RegistroVoluntariadoComponent } from './registro-voluntariado/registro-voluntariado.component';

@NgModule({
  declarations: [
    AppComponent,
    QuienesSomosComponent,
    NoticiasComponent,
    LoginComponent,
    EquipoDesarrolloComponent,
    RegistroVoluntariadoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
