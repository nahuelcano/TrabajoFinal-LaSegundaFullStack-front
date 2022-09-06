import { Injectable, OnInit } from '@angular/core';

import { Producto } from 'src/app/Producto';
@Injectable({
  providedIn: 'root'
})
export class ProductoService implements OnInit {

  getProductos() {
    let productList: Producto[]=[
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
    return productList;
    
  }
  constructor() { }

  ngOnInit(): void {
    throw new Error('Method not implemented.');
  }
}
