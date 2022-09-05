import { Component, OnInit } from '@angular/core';
import { producto } from 'src/app/modules/modelos/productos.model';
@Component({
  selector: 'gdp-components',
  template: ``,
  styles: [],
  templateUrl: './carrito.component.html',
  styleUrls: ['./carrito.component.scss']
})
export class CarritoComponent implements OnInit {

  constructor() { 
    // productosList: producto[] = [
    //   new producto('ver como conseguir los datos de la bd')
    // ]
  }

  ngOnInit(): void {
  }

}
