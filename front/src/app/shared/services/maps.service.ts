import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

// interface Location{
//   city: string;
// }


@Injectable({
  providedIn: 'root'
})
export class MapsService {
  api ='';
  constructor(private http: HttpClient) { }
  getLocation() {
    return this.http.get(this.api);
  }
}
