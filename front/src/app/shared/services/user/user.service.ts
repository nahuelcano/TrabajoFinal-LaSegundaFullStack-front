import { HttpClient } from '@angular/common/http';
// import { HttpClientModule } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Response } from 'src/app/modelos/Response';
import { UsuarioLog, UsuarioReg } from 'src/app/modelos/Usuario';
// import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class UserService {
  url = 'http://localhost:3000/auth';
  constructor(private http: HttpClient) { }

  getUsers() {
    const ad = '/find/all';
   return this.http.get(this.url+ad);
  }

  addUser(user:UsuarioLog) {
    const ruta = `${this.url}`+'/login';
    return this.http.post<Response>(ruta, user, { observe: 'response' });
    // return this.http.post(ruta, {
    //   name: 'admin',
    //   email: 'admin@bluna.com',
    //   password: 'admin',
    // }
    // //   , {
    // // //   Headers: this.httpHeaders,
    // //   observe: 'response'
    // // }
    // );
}
  login(user: UsuarioLog): Observable<any> {
    const ruta = `${this.url}`+'/login';
    return this.http.post(ruta, user);
    
  }
  register(user: UsuarioReg): Observable<any>{
    const ruta = `${this.url}`+'/register';
    return this.http.post(ruta, user);
  }

  ngOnDestroy() {
  
}





}
