// import { ConnectionPositionPair } from '@angular/cdk/overlay';
import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/shared/services/user/user.service';


@Component({
  selector: 'gdp-usuario',
  templateUrl: './usuario.component.html',
  styleUrls: ['./usuario.component.scss']
})
export class UsuarioComponent implements OnInit {
  Nombre: string = '';
  
  constructor(private us:UserService) { }

  ngOnInit(): void {
  }
  getUserName() {
    // this.user.find()
    this.Nombre = this.us.getUserNLogged();
    return this.Nombre;
  }
  postUser() {
  //   this.userService.addUser$().subscribe({
  //     next: (res: any) => {
  //   console.log(res)
  // }})
}





}
