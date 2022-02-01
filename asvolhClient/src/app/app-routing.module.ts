import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EquipoDesarrolloComponent } from './equipo-desarrollo/equipo-desarrollo.component';
import { InicioComponent } from './inicio/inicio.component';
import { NoticiasComponent } from './noticias/noticias.component';
import { QuienesSomosComponent } from './quienes-somos/quienes-somos.component';
import { RegistroVoluntariadoComponent } from './registro-voluntariado/registro-voluntariado.component';
import { DonacionComponent } from './donacion/donacion.component';
import { LoginComponent } from './login/login.component';

const routes: Routes = [
  { path: 'noticias', component: NoticiasComponent },
  { path: '', component: InicioComponent},
  { path: 'equipo', component: EquipoDesarrolloComponent},
  { path: 'quienessomos', component: QuienesSomosComponent},
  { path: 'registros', component: RegistroVoluntariadoComponent},
  { path: 'donacion', component: DonacionComponent},
  { path: 'login', component: LoginComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
