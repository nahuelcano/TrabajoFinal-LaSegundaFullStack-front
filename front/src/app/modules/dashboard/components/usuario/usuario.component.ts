// import { ConnectionPositionPair } from '@angular/cdk/overlay';
import { Component, OnInit } from '@angular/core';
import { Router, RouterLink } from '@angular/router';
import { UserService } from 'src/app/shared/services/user/user.service';


@Component({
  selector: 'gdp-usuario',
  templateUrl: './usuario.component.html',
  styleUrls: ['./usuario.component.scss']
})
export class UsuarioComponent implements OnInit {
  Nombre: string = '';
  
  constructor(private us:UserService, private ruta:Router) { }

  ngOnInit(): void {
    if (localStorage.getItem('token') != null)
      this.Nombre = this.us.getUserNLogged();
    else
      this.ruta.navigate(['/login']);
  }
  getUserName() {
    // this.user.find()
    return this.Nombre;
  }
  postUser() {
  //   this.userService.addUser$().subscribe({
  //     next: (res: any) => {
  //   console.log(res)
  // }})
}





}
