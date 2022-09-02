import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
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

  constructor(private _router: Router) {}

  ngOnInit(): void {}

  onSubmit() {
    if (this.form.valid) {
      console.log(this.form.value);
      this._router.navigate(['/login']);
    } else {
    }
  }
}
