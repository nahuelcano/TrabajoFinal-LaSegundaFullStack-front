import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { Router } from '@angular/router';
import { Location } from '@angular/common';

@Component({
  selector: 'gdp-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {
  form = new FormGroup({
    email: new FormControl(''),
    password: new FormControl(''),
  });

  constructor(private _router: Router, private _location:Location) {}

  ngOnInit(): void {}
  backClicked() {
      this._location.back();
    }
  onSubmit() {
    if (this.form.valid) {
      console.log(this.form.value);
      // tengo el form pero deberia de guardarlo en algun lugar
      localStorage.setItem('isLogged', 'true');
      // this._router.navigate(['/inicio']);
      this._location.back();
    } else {
      alert('El email o la contraseña son incorrectos.');
      this.form.markAllAsTouched();
      
    }
  }
 
}
