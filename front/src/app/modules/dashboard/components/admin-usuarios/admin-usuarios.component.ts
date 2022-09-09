import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'gdp-admin-usuarios',
  templateUrl: './admin-usuarios.component.html',
  styleUrls: ['./admin-usuarios.component.scss']
})
export class AdminUsuariosComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  postUser() {
    //   this.userService.addUser$().subscribe({
    //     next: (res: any) => {
    //   console.log(res)
    // }})
  }


  
}