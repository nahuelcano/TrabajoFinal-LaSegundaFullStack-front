import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
// import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class UserService {
  url = 'http://localhost:3000/auth';
  constructor(private http: HttpClient) { }

  getUsers() {
   return this.http.get(this.url);
  }
// login(user: Any): Observable<any> {
//     return this.http.post("https://reqres.in/api/login", user);
//   }


  addUser(user:any) {
    // const ruta = `${this.url}`;
    // return this.http.post(ruta, []
    //   name: 'admin',
    //   email: 'admin@bluna.com',
    //   password: 'admin',
    // ]
    // //   , {
    // // //   Headers: this.httpHeaders,
    // //   observe: 'response'
    // // }
    // );
}



  ngOnDestroy() {
  
}





}
