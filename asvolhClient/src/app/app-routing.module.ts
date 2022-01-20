import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { InicioComponent } from './inicio/inicio.component';
import { NoticiasComponent } from './noticias/noticias.component';
import { QuienesSomosComponent } from './quienes-somos/quienes-somos.component';

const routes: Routes = [
  { path: 'noticias', component: NoticiasComponent },
  { path: '', component: InicioComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
