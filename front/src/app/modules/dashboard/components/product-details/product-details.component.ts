import { Component, OnInit } from '@angular/core';
import { Producto } from '../../../../Producto';
import { ProductosListBoxComponent } from '../productos-list-box/productos-list-box.component';
@Component({
  selector: 'gdp-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.scss']
})
export class ProductDetailsComponent implements OnInit {
  prod: Producto =
    {
      nombre: 'Hamburguesa cheese',
      ingredientes: 'hamburguesa con queso, pepinillos, cebolla y ketchup',
      precio: 756.56,
      imagepath: 'https://s7d1.scene7.com/is/image/mcdonalds/t-mcdonalds-Cheeseburger-1:product-header-desktop?wid=829&hei=455&dpr=off'
    };
  constructor() { }

  ngOnInit(): void {
  }

}
