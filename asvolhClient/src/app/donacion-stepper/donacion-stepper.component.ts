import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

interface TiposPago {
  value: string;
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
  tipo_pago: TiposPago[];

  constructor(private fb: FormBuilder) { }

  ngOnInit(): void {
    this.tipo_pago = [
      {value: '1', viewValue: 'PayPal'},
      {value: '2', viewValue: 'Transferencia Bancaria'},
      {value: '3', viewValue: 'Diners, Visa, MasterCard, Discover & Tarjetas de Débito (Solo Tarjetas Nacionales)'},
    ];

    this.profileFormGroup = this.fb.group({
      cedula: ["", Validators.required],
      nombres: ["", Validators.required]
    });
    this.contactoFormGroup = this.fb.group({
      celular: ["", Validators.required],
      correo: ["", Validators.required]
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

}
