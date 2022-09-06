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
      },
      {
        nombre: 'Papas bravas',
      ingredientes: 'Papas y condimentos',
      precio: 970.3,
      imagepath: 'https://mui.kitchen/__export/1623169788508/sites/muikitchen/img/2021/06/08/patatas-bravas-2.jpg_1782192108.jpg'
      },
      {
        nombre: 'Coca Cola',
        ingredientes: 'Gaseosa',
        precio: 542.10,
        imagepath: 'https://journey.coca-cola.com/content/dam/journey/lc/es/private/nuestra-compania/lc-es-CompFeature_Content-Image_Mobile.jpg'
    }
  ];
    return productList;
    
  }
  constructor() { }

  ngOnInit(): void {
    throw new Error('Method not implemented.');
  }
}
