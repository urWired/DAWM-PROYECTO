import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Voluntarios } from '../models/voluntarios.model';
import { VoluntariosService } from '../services/voluntarios.service';

interface Voluntariado {
  value: number;
  viewValue: string;
}

@Component({
  selector: 'app-registro-stepper',
  templateUrl: './registro-stepper.component.html',
  styleUrls: ['./registro-stepper.component.css']
})
export class RegistroStepperComponent implements OnInit {

  selectedValue: string;

  voluntariados: Voluntariado[];
  datosPersonalesFormGroup: FormGroup;
  ingresoFormGroup: FormGroup;
  contactoFormGroup: FormGroup;

  voluntario: Voluntarios = {
    cedula: "",
    nombres: "",
    apellidos: "",
    correo: "",
    celular: "",
    direccion: "",
    tipo_usuario: 3,
    voluntariado: 0,
    fecha_nacimiento: new Date(),
    fecha_ingreso: new Date(),
    motivo_ingreso: "",
  };

  constructor(private fb: FormBuilder, private voluntariosService: VoluntariosService) { }

  ngOnInit(): void {
    this.voluntariados = [
      {value: 1, viewValue: 'Plan Canguro'},
      {value: 2, viewValue: 'Taller de Mallas'},
      {value: 3
        , viewValue: 'Bazar'},
    ];
    this.datosPersonalesFormGroup = this.fb.group({
      cedula: ["", Validators.required],
      nombres: ["", Validators.required],
      apellidos: ["", Validators.required],
      fechaNacimiento: ["", Validators.required]
    });
    this.contactoFormGroup = this.fb.group({
      celular: ["", Validators.required],
      correo: ["", Validators.required],
      direccion: ["", Validators.required]
    });
    this.ingresoFormGroup = this.fb.group({
      voluntariado: ["", Validators.required],
      motivo: [""]
    });
  }

  crearVoluntario(){
    const data = {
      cedula: this.voluntario.cedula,
      nombres: this.voluntario.nombres,
      apellidos: this.voluntario.apellidos,
      correo: this.voluntario.correo,
      celular: this.voluntario.celular,
      direccion: this.voluntario.direccion,
      tipo_usuario: 2,
      voluntariado: this.voluntario.voluntariado,
      fecha_nacimiento: this.voluntario.fecha_nacimiento,
      fecha_ingreso: new Date(),
      motivo_ingreso: this.voluntario.motivo_ingreso,
    }
    console.log(data);
    this.voluntariosService.create(data)
    .subscribe({
      next: (res) => {
        console.log(res);
      },
      error: (e) => console.error(e)
    })
  }

}
