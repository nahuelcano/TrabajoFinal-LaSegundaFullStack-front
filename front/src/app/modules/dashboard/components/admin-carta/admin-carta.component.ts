import { Component, OnInit,ViewEncapsulation } from '@angular/core';
import { Producto } from 'src/app/Producto';
import { ProductoService } from 'src/app/shared/services/productos/productos.service';
import { PostsService } from 'src/app/shared/services/posts/posts.service';
import { MaterialModule } from '@gdp/shared/modules';
import { animate, state, style, transition, trigger } from '@angular/animations';

@Component({
  selector: 'gdp-admin-carta',
  templateUrl: './admin-carta.component.html',
  styleUrls: ['./admin-carta.component.scss'],
  encapsulation: ViewEncapsulation.None,
  // animations: [
  //   trigger('detailExpand', [
  //     state('collapsed', style({height: '0px', minHeight: '0'})),
  //     state('expanded', style({height: '*'})),
  //     transition('expanded <=> collapsed', animate('225ms cubic-bezier(0.4, 0.0, 0.2, 1)')),
  //   ]),
  // ],
})
//   export interface ProductoL{
//   pos: number;
//   nombre: string;
//   categoria: string;
//   descripcion: string;
//   precio: number;
//   stock: string;
//   fActualizado: Date;
// }
// const ELEMENT_DATA: ProductoL[]=[
//   {
//     pos: 1,
//     nombre: 'Hamburguesa con queso',
//     categoria: 'Burguers',
//     descripcion: 'Hamburguesa con queso, cebolla y ketchup',
//     precio: 750.20,
//     stock: '20',
//     fActualizado: new Date('2022-02-03'),
//   }
    
// ]
export class AdminCartaComponent implements OnInit {
  // dataSource = ELEMENT_DATA;
  // columnsToDisplay = ['Nombre', 'Descripcion', 'symbol', 'position'];
  // columnsToDisplayWithExpand = [...this.columnsToDisplay, 'expand'];
  
  
 data: any;

  constructor(private productos:ProductoService, private postData:PostsService) { }

ngOnInit(): void {
  // this.listaProductos = this.productos.getProductos();  
  // console.log((this.listaProductos));
  this.productos.getProductos().subscribe((result) => {
    console.warn('result', result)
    this.data = result;
    console.log(result);
  })
  }

}
