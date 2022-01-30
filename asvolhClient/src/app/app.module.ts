import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
/*Agregando componentes creados*/
import { QuienesSomosComponent } from './quienes-somos/quienes-somos.component';
import { NoticiasComponent } from './noticias/noticias.component';
import { LoginComponent } from './login/login.component';
import { InicioComponent } from './inicio/inicio.component';
import { EquipoDesarrolloComponent } from './equipo-desarrollo/equipo-desarrollo.component';
import { RegistroVoluntariadoComponent } from './registro-voluntariado/registro-voluntariado.component';
import { NavbarComponent } from './navbar/navbar.component';
import { DonacionComponent } from './donacion/donacion.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatStepperModule} from '@angular/material/stepper';
import { MatFormFieldModule} from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { DonacionStepperComponent } from './donacion-stepper/donacion-stepper.component';
import { RegistroStepperComponent } from './registro-stepper/registro-stepper.component';

@NgModule({
  declarations: [
    AppComponent,
    QuienesSomosComponent,
    NoticiasComponent,
    LoginComponent,
    InicioComponent,
    EquipoDesarrolloComponent,
    RegistroVoluntariadoComponent,
    NavbarComponent,
    DonacionComponent,
    DonacionStepperComponent,
    RegistroStepperComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatStepperModule,
    FormsModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
