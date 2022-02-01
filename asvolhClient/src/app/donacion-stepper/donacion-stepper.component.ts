import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Donaciones } from '../models/donaciones.model';
import { Donantes } from '../models/donantes.model';
import { DonacionesService } from '../services/donaciones.service';
import { DonantesService } from '../services/donantes.service';

interface TiposPago {
  value: number;
  viewValue: string;
}

interface TipoDonante {
  value: number;
  viewValue: string;
}

@Component({
  selector: 'app-donacion-stepper',
  templateUrl: './donacion-stepper.component.html',
  styleUrls: ['./donacion-stepper.component.css']
})
export class DonacionStepperComponent implements OnInit {

  profileFormGroup: FormGroup;
  contactoFormGroup: FormGroup;
  donacionFormGroup: FormGroup;
  detallesFormGroup: FormGroup;

  selectedValue: string;
  tipo_donante: TipoDonante[];
  tipo_pago: TiposPago[];

  donante: Donantes = {
    cedula: "",
    nombres: "",
    apellidos: "",
    correo: "",
    celular: "",
    direccion: "",
    tipo_usuario: 2,
    tipo_donante: 0,
    fecha_nacimiento: new Date(),
  };
  donacion: Donaciones = {
    monto:0,
    id_donante:"",
    detalles:"",
  };

  constructor(private fb: FormBuilder, private donantesService: DonantesService, private donacionesService: DonacionesService) { }

  ngOnInit(): void {
    this.tipo_donante = [
      {value: 1, viewValue: "Persona Natural"},
      {value: 2, viewValue: "Empresa"},
    ];

    this.tipo_pago = [
      {value: 1, viewValue: 'PayPal'},
      {value: 2, viewValue: 'Transferencia Bancaria'},
      {value: 3, viewValue: 'Diners, Visa, MasterCard, Discover & Tarjetas de Débito (Solo Tarjetas Nacionales)'},
    ];

    this.profileFormGroup = this.fb.group({
      cedula: ["", Validators.required],
      tipo_donante: ["", Validators.required],
      nombres: ["", Validators.required],
      apellidos: ["", Validators.required],
      fechaNacimiento: ["", Validators.required]
    });
    this.contactoFormGroup = this.fb.group({
      celular: ["", Validators.required],
      correo: ["", Validators.required],
      direccion: ["", Validators.required]
    });
    this.donacionFormGroup = this.fb.group({
      tipo_pago: ["", Validators.required],
      cuenta: ["", Validators.required],
      monto: ["", Validators.required],
    });

    this.detallesFormGroup = this.fb.group({
      detalles: ["", Validators.required]
    });
  }

  crearDonante(){
    const data = {
      cedula: this.donante.cedula,
      nombres: this.donante.nombres,
      apellidos: this.donante.apellidos,
      correo: this.donante.correo,
      celular: this.donante.celular,
      direccion: this.donante.direccion,
      tipo_usuario: 2,
      tipo_donante: this.donante.tipo_donante,
      fecha_nacimiento: this.donante.fecha_nacimiento,
    }
    console.log(data);
    this.donantesService.create(data)
    .subscribe({
      next: (res) => {
        console.log(res);
      },
      error: (e) => console.error(e)
    })
  }

  crearDonacion(){
    const data = {
      id_donante: this.donante.cedula,
      monto: this.donacion.monto,
      detalles: this.donacion.detalles,
    }
    console.log(data);
    this.donacionesService.create(data)
    .subscribe({
      next: (res) => {
        console.log(res);
      },
      error: (e) => console.error(e)
    })
  }
}
