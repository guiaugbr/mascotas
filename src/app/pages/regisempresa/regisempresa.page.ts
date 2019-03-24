import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder,ReactiveFormsModule, Validators, FormControl } from '@angular/forms';
import { NavController } from '@ionic/angular';
import { AuthService } from '../../services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-regisempresa',
  templateUrl: './regisempresa.page.html',
  styleUrls: ['./regisempresa.page.scss'],
})
export class RegisempresaPage implements OnInit {

  validations_form: FormGroup;
  errorMessage: string = '';
  successMessage: string = '';

  validation_messages = {
    'email': [
      { type: 'required', message: 'Email is required.' },
      { type: 'pattern', message: 'Enter a valid email.' }
    ],
    'password': [
      { type: 'required', message: 'Contraseña Requerida.' },
      { type: 'minlength', message: 'La Contraseña debe tener mas de 5 digitos.' }
    ],
    'confirmarPassword': [
      { type: 'required', message: 'Confirmar Contraseña Requerida.' },
      { type: 'minlength', message: 'la contraseña debe ser igual.' }
    ],
    'localidad': [
      { type: 'required', message: 'Localidad es Requerida.' },
      { type: 'minlength', message: 'Localidad es Requerida.' }
    ],
    'plan': [
      { type: 'required', message: 'tipo de mascota es Requerida.' },
      { type: 'minlength', message: 'tipo de mascota .' }
    ],
    'cif': [
      { type: 'required', message: 'tipo de mascota es Requerida.' },
      { type: 'minlength', message: 'tipo de mascota .' }
    ],
    'telefono': [
      { type: 'required', message: 'tipo de mascota es Requerida.' },
      { type: 'minlength', message: 'tipo de mascota .' }
    ]
  };

  constructor(
    private authService: AuthService,
    private formBuilder: FormBuilder,
    private router: Router
  ) { }

  ngOnInit() {
    this.validations_form = this.formBuilder.group({
      email: new FormControl('', Validators.compose([
        Validators.required,
        Validators.pattern('^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+.[a-zA-Z0-9-.]+$')
      ])),
      password: new FormControl('', Validators.compose([
        Validators.minLength(5),
        Validators.required
      ])),
      confirmarPassword: new FormControl('', Validators.compose([
        Validators.minLength(5),
        Validators.required
      ])),
      localidad: new FormControl('', Validators.compose([
        Validators.minLength(3),
        Validators.required
      ])),
      cif: new FormControl('', Validators.compose([
        Validators.minLength(3),
        Validators.required
      ])),
      telefono: new FormControl('', Validators.compose([
        Validators.minLength(3),
        Validators.required
      ])),
    });
  }

  tryRegister(value){
    this.authService.doRegister(value)
      .then(res => {
        console.log(res);
        this.errorMessage = "";
        this.successMessage = "Your account has been created. Please log in.";
      }, err => {
        console.log(err);
        this.errorMessage = err.message;
        this.successMessage = "";
      })
  }

  goLoginPage(){
    this.router.navigate(["/login"]);
  }

}
