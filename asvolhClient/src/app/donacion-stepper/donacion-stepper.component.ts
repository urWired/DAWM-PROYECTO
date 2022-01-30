import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-donacion-stepper',
  templateUrl: './donacion-stepper.component.html',
  styleUrls: ['./donacion-stepper.component.css']
})
export class DonacionStepperComponent implements OnInit {

  profileFormGroup: FormGroup;
  addressFormGroup: FormGroup;
  constructor(private fb: FormBuilder) { }

  ngOnInit(): void {
    this.profileFormGroup = this.fb.group({
      name: [" ", Validators.required]
    });
    this.addressFormGroup = this.fb.group({
      address: [" ", Validators.required]
    });
  }

}
