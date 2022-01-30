import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-registro-stepper',
  templateUrl: './registro-stepper.component.html',
  styleUrls: ['./registro-stepper.component.css']
})
export class RegistroStepperComponent implements OnInit {

  datosPersonalesFormGroup: FormGroup;
  ingresoFormGroup: FormGroup;
  constructor(private fb: FormBuilder) { }

  ngOnInit(): void {
    this.datosPersonalesFormGroup = this.fb.group({
      cedula: ["", Validators.required],
      nombres: ["", Validators.required],
      apellidos: ["", Validators.required],
      fechaNacimiento: ["", Validators.required]
    });
    this.ingresoFormGroup = this.fb.group({
      direccion: ["", Validators.required],
      motivo: [""]
    });
  }

}
