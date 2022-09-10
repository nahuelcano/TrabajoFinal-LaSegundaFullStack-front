import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { UserService } from 'src/app/shared/services/user/user.service';
@Component({
  selector: 'gdp-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss'],
})
export class RegisterComponent implements OnInit {
  form = new FormGroup({
    name: new FormControl(''),
    email: new FormControl(''),
    password: new FormControl(''),
  });

  constructor(private _router: Router,private usuario:UserService) {}

  ngOnInit(): void {}

  onSubmit() {
    if (this.form.valid) {
      console.log(this.form.value);
      // aca guardaria los datos en la bd
      // this.usuario.addUser(this.form.value).subscribe((result) => {
      //   console.log('hola', result);
      // });
      // this._router.navigate(['/login']);
    } else {
      alert('Inserte elementos validos');
    }
  }
}
