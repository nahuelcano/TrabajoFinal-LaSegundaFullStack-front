import { Component, OnInit } from '@angular/core';
import { Producto } from '../../../../Producto';
@Component({
  selector: 'gdp-productos-list-box',
  templateUrl: './productos-list-box.component.html',
  styleUrls: ['./productos-list-box.component.scss']

})
export class ProductosListBoxComponent implements OnInit {
  productlist: Producto[]=[
    {
      nombre: 'Hamburguesa cheese',
      ingredientes: 'hamburguesa con queso, pepinillos, cebolla y ketchup',
      precio: 756.56,
      imagepath: 'https://s7d1.scene7.com/is/image/mcdonalds/t-mcdonalds-Cheeseburger-1:product-header-desktop?wid=829&hei=455&dpr=off'
    },
    {
      nombre: 'Pizza de mozzarela',
      ingredientes: 'Mozzarella',
      precio: 1500,
      imagepath: './assets/pizza.jpg'
    }
  ];
  constructor() { }

  ngOnInit(): void {
  }

}
