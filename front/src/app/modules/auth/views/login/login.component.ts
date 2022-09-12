import { Component, OnInit, OnDestroy } from '@angular/core';
import { FormGroup, FormControl, Validators, FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';
import { Location } from '@angular/common';
import { UsuarioLog } from 'src/app/modelos/Usuario';
import { UserService } from 'src/app/shared/services/user/user.service';
// import { Subscription } from 'rxjs';
import { HttpHeaders } from '@angular/common/http';

@Component({
  selector: 'gdp-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {
  formLogin: FormGroup; 
  // subRe: Subscription = new Subscription;
  


  constructor(private _router: Router, private _location: Location, formBuilder:FormBuilder, private usuario:UserService) {
    this.formLogin =formBuilder.group({
      email: ['', Validators.required],
      password: ['', Validators.required]
  });
    
  }


  ngOnInit(): void {
    // let httpHeaders: HttpHeaders = new HttpHeaders();
    // const tok = sessionStorage.getItem('token');
  }
  backClicked() {
      this._location.back();
    }
  onSubmit() {
    // if (this.formLogin.valid) {
    //   console.log(this.formLogin.value);
    //   const usuarioLog: Usuario = {
    //     email:this.formLogin.value.email,
    //     password:this.formLogin.value.password
    //   } 
    //   // this.subRe =
    //     this.usuario.addUser(usuarioLog).subscribe((u) => {
    //     const token = u.body!.response;
    //     console.log('token', token);
    //     sessionStorage.setItem('token', token);
    //     // this._location.back();
    //   }, err => { console.log('Error en el login'); })
      
    //   localStorage.setItem('isLogged', 'true');
      
    //   // this._router.navigate(['/inicio']);
    //   // this._location.back();
    // } else {
    //   alert('El email o la contraseña son incorrectos.');
    //   this.formLogin.markAllAsTouched();
      
  }
  login() {
    const usuarioLog:UsuarioLog = {
        email:this.formLogin.value.email,
        password:this.formLogin.value.password
    }
    this.usuario.login(usuarioLog).subscribe((u) => {
      console.log('usuario',u);
    })
  }




  }
//  ngOnDestroy(): void {
//   //Called once, before the instance is destroyed.
//   //Add 'implements OnDestroy' to the class.
//    if (this.subRe) {
//      this.subRe.unsubscribe();
//   }
 

