import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private userService:UserService) { }

  getUser$() {
    // const ruta = '${this.url}/signup';
    // return this.http.post(ruta, {
    //   Headers: this.httpHeaders,
    //   observe: 'response'
    // });
  }



  addUser$() {
    // const ruta = '${this.url}/signup';
    // return this.http.post(ruta, {
    //   name: 'admin',
    //   email: 'admin@bluna.com',
    //   password: 'admin'
    // }, {
    //   Headers: this.httpHeaders,
    //   observe: 'response'
    // });
}



  ngOnDestroy() {
  
}





}
