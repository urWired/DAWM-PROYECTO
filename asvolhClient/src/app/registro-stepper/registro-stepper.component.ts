import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

interface Voluntariado {
  value: string;
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
  constructor(private fb: FormBuilder) { }

  ngOnInit(): void {
    this.voluntariados = [
      {value: '1', viewValue: 'Plan Canguro'},
      {value: '2', viewValue: 'Taller de Mallas'},
      {value: '3', viewValue: 'Bazar'},
    ];
    this.datosPersonalesFormGroup = this.fb.group({
      cedula: ["", Validators.required],
      nombres: ["", Validators.required],
      apellidos: ["", Validators.required],
      fechaNacimiento: ["", Validators.required],
      direccion: ["", Validators.required]
    });
    this.ingresoFormGroup = this.fb.group({
      voluntariado: ["", Validators.required],
      motivo: [""]
    });
  }

}
