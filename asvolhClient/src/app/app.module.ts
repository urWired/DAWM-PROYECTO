import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import {HttpClientModule} from '@angular/common/http'

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
/*Agregando componentes creados*/
import { QuienesSomosComponent } from './quienes-somos/quienes-somos.component';
import { NoticiasComponent } from './noticias/noticias.component';
import { LoginComponent } from './login/login.component';
import { InicioComponent } from './inicio/inicio.component';
import { EquipoDesarrolloComponent } from './equipo-desarrollo/equipo-desarrollo.component';
import { RegistroVoluntariadoComponent } from './registro-voluntariado/registro-voluntariado.component';
import { PerfilComponent } from './perfil/perfil.component';
import { NavbarComponent } from './navbar/navbar.component';

import {authInterceptorProviders} from './_helpers/auth.interceptor';

@NgModule({
  declarations: [
    AppComponent,
    QuienesSomosComponent,
    NoticiasComponent,
    LoginComponent,
    InicioComponent,
    EquipoDesarrolloComponent,
    RegistroVoluntariadoComponent,
    PerfilComponent,
    NavbarComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [authInterceptorProviders],
  bootstrap: [AppComponent]
})
export class AppModule { }
