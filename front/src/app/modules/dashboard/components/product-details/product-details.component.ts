import { Component, OnInit } from '@angular/core';
import { ProductoService } from 'src/app/shared/services/productos/productos.service';
// import { Producto } from '../../../../Producto';
// import { ProductosListBoxComponent } from '../productos-list-box/productos-list-box.component';
@Component({
  selector: 'gdp-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.scss']
})
export class ProductDetailsComponent implements OnInit {
  prod: any;
  constructor(private productos:ProductoService) { }


  ngOnInit(): void {
    this.productos.getProducto().subscribe((result) => {
      console.warn('result', result)
      this.prod = result;
      
    })
  }

}
