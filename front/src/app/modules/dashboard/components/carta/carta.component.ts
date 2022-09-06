import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { Producto } from 'src/app/Producto';
import { ProductoService } from 'src/app/shared/services/productos.service';
import { PostsService } from 'src/app/shared/services/posts.service';
@Component({
  selector: 'gdp-carta',
  templateUrl: './carta.component.html',
  styleUrls: ['./carta.component.scss'],
  encapsulation:ViewEncapsulation.None
})
export class CartaComponent implements OnInit {
  listaProductos:Producto [] = [];
  data: any;


  constructor(private productos:ProductoService, private postData:PostsService) { }

ngOnInit(): void {
  this.listaProductos = this.productos.getProductos();  
  console.log((this.listaProductos));
  this.postData.getPosts().subscribe((result) => {
    console.warn('result', result)
    this.data = result;
  })
  }
}
