import { Component, OnInit } from '@angular/core';
import { Noticias } from '../models/noticias.model';
import { NoticiasService } from '../services/noticias.service';

@Component({
  selector: 'app-noticias',
  templateUrl: './noticias.component.html',
  styleUrls: ['./noticias.component.css']
})
export class NoticiasComponent implements OnInit {

  /*noticia: Noticias = {
    titulo: "",
    fecha: new Date(),
    contenido: "",
    creador: ""
  }*/

  noticias?: Noticias[];
  noticiaActual: Noticias = {};
  indxActual = -1;
  titulo = '';

  constructor(private noticiasService: NoticiasService) { }

  ngOnInit(): void {
    this.mostrarNoticias();
  }

  mostrarNoticias(): void {
    this.noticiasService.getAll()
      .subscribe({
        next: (data) => {
          this.noticias = data;
        },
        error: (e) => console.error(e)
    });
  }

  buscarTitulo(): void {
    this.noticiaActual = {};
    this.indxActual = -1;

    this.noticiasService.findByTitle(this.titulo)
      .subscribe({
        next: (data) => {
          this.noticias = data;
          console.log(data);
        },
        error: (e) => console.error(e)
    });
  }

}
