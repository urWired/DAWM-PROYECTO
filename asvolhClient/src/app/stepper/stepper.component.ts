import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-stepper',
  templateUrl: './stepper.component.html',
  styleUrls: ['./stepper.component.css']
})
export class StepperComponent implements OnInit {

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
