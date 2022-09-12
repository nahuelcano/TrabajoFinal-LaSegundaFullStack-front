// import { ConnectionPositionPair } from '@angular/cdk/overlay';
import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/shared/services/user/user.service';

@Component({
  selector: 'gdp-usuario',
  templateUrl: './usuario.component.html',
  styleUrls: ['./usuario.component.scss']
})
export class UsuarioComponent implements OnInit {
  nombre: string='';
  constructor(user:UserService) { }

  ngOnInit(): void {
  }
  getUserName() {
    // this.user.find()
      return;
  }
  postUser() {
  //   this.userService.addUser$().subscribe({
  //     next: (res: any) => {
  //   console.log(res)
  // }})
}





}
