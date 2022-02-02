import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Contacto } from '../models/contacto.model';
import { ContactoService } from '../services/contacto.service';

@Component({
  selector: 'app-contact-form',
  templateUrl: './contact-form.component.html',
  styleUrls: ['./contact-form.component.css']
})
export class ContactFormComponent implements OnInit {

  contactForm: FormGroup;

  contacto: Contacto = {
    nombre: "",
    correo: "",
    mensaje: ""
  };
  submitted = false;
  error: {};

  constructor(private fb: FormBuilder, private contactoService: ContactoService) { }

  ngOnInit(): void {
    console.log(this.contactoService.test)
    this.contactForm = this.fb.group({
      nombre: ["", Validators.required],
      correo: ["", Validators.required]
    })
  }

  submitForm() {
    let contacto = {
      name: this.contacto.nombre,
      email: this.contacto.correo,
      mensaje: this.contacto.mensaje
    }
    this.contactoService.sendEmail("http://localhost:3001/sendmail", contacto).subscribe(
      data => {
        let res:any = data; 
        console.log(
          `👏 > 👏 > 👏 > 👏 ${contacto.name} ha enviado el mensaje correctamente y la ID del mensaje es ${res.messageId}`
        );
      },
      err => {
          console.log(err);
      }
    );
  }
}
