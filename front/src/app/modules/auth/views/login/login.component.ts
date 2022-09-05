import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { Router } from '@angular/router';


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

  constructor(private _router: Router) {}

  ngOnInit(): void {}

  onSubmit() {
    if (this.form.valid) {
      console.log(this.form.value);
      // tengo el form pero deberia de guardarlo en algun lugar
      localStorage.setItem('isLogged', 'true');
      this._router.navigate(['/inicio']);
    } else {
      alert('El email o la contraseña son incorrectos.');
      this.form.markAllAsTouched();
    }
  }
}
