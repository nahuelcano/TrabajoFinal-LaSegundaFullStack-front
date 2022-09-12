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
  


  constructor(private _router: Router, private _location: Location, formBuilder: FormBuilder,
    private usuario: UserService) {
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
    
      
  }
  login() {
    const usuarioLog:UsuarioLog = {
        email:this.formLogin.value.email,
        password:this.formLogin.value.password
    }
    this.usuario.login(usuarioLog).subscribe((u) => {
      console.log('usuario', u);
      this.usuario.setToken(u.token);
      
    })
    this._location.back();
  }




  }
//  ngOnDestroy(): void {
//   //Called once, before the instance is destroyed.
//   //Add 'implements OnDestroy' to the class.
//    if (this.subRe) {
//      this.subRe.unsubscribe();
//   }
 

