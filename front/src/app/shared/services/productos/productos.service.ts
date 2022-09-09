import { HttpClient } from '@angular/common/http';
import { Injectable, OnInit } from '@angular/core';

import { Producto } from 'src/app/Producto';
@Injectable({
  providedIn: 'root'
})
export class ProductoService implements OnInit {
  url = 'http://localhost:3000/productos/';
  constructor(private http: HttpClient) { }
  getProductos() {
    return this.http.get(this.url);
  }
  getProducto() {
    return this.http.get(this.url);
  }

  ngOnInit(): void {
    throw new Error('Method not implemented.');
  }
}
