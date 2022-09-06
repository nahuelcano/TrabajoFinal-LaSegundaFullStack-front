import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { Producto } from 'src/app/Producto';
import { ProductoService } from 'src/app/shared/services/productos.service';
@Component({
  selector: 'gdp-carta',
  templateUrl: './carta.component.html',
  styleUrls: ['./carta.component.scss'],
  encapsulation:ViewEncapsulation.None
})
export class CartaComponent implements OnInit {
  listaProductos:Producto [] = [];



  constructor(public productos:ProductoService) { }

ngOnInit(): void {
  this.listaProductos = this.productos.getProductos();  
  console.log((this.listaProductos));
  }
}
