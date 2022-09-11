import { HttpClient } from '@angular/common/http';
import { Injectable, OnInit } from '@angular/core';
import { map } from 'rxjs/operators';
import { Producto } from 'src/app/Producto';
@Injectable({
  providedIn: 'root'
})
export class ProductoService implements OnInit {
  url = 'http://localhost:3000/productos/';
  constructor(private http: HttpClient) { }
  getProductos() {
    return this.http.get(this.url)
      // .pipe(map(resp=>[])   )
  }
  getProducto(id:string) {
    return this.http.get(this.url+id);
  }
  addProduct() {
    
  }


  // private 
  // filterData(valueToSearch: string): void{
    // const query = {};
    // this.
    
  // }
  ngOnInit(): void {
    throw new Error('Method not implemented.');
  }
}
