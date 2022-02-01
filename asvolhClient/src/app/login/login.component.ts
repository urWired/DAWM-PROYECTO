import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { AuthInterceptor } from '../_helpers/auth.interceptor';
import { AuthService } from '../_services/auth.service';
import { TokenStorageService } from '../_services/token-storage.service';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  //form fields

  form: FormGroup = new FormGroup({
    username: new FormControl("", [Validators.required]),
    password: new FormControl("", [Validators.required]),
  });

  // form: any = {
  //   username: null,
  //   password: null
  // };

  isLoggedIn = false;
  isLoginFailed = false;
  errorMessage = '';
  roles : string[] = [];
  isSubmitted = false;

  constructor(private authService: AuthService, private tokenStorage: TokenStorageService) { }

  ngOnInit(): void {

    if(this.tokenStorage.getToken()){
      this.isLoggedIn = true;
      this.roles = this.tokenStorage.getUser().roles;
    }


  }

  onSubmit(): void {
    
    // El formgroup se crea a partir de una coleccion con la estructura clave-valor
    // esto permite ingresar a los datos como si fuera un dicc de python donde la indexacion
    // es la clave y esta tiene un atributo value para obtener el valor asociado
    const username = this.form.controls['username'].value;
    const password = this.form.controls['password'].value;
    

    this.authService.login(username,password).subscribe(
      data => {
        this.isSubmitted = false;
        this.tokenStorage.saveToken(data.accessToken);
        this.tokenStorage.saveUser(data);

        this.isLoginFailed = false;
        this.isLoggedIn = true;
        this.isSubmitted = true;
        this.roles = this.tokenStorage.getUser().roles;
        this.reloadPage();
      },
      err => {
        this.isSubmitted = true;
        this.errorMessage = err.error.message;
        this.isLoginFailed = true;
        this.isSubmitted = false;
      }
    );
  }

  reloadPage(): void {
    window.location.reload();
  }

}
