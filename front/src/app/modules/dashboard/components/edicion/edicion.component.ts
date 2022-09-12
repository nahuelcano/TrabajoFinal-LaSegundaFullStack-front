import { Component, OnInit } from '@angular/core';
import { Producto } from 'src/app/modelos/Producto';
import { CategoriasService } from 'src/app/shared/services/categorias/categorias.service';
import { FormsModule,ReactiveFormsModule } from '@angular/forms';
import { ProductoService } from 'src/app/shared/services/productos/productos.service';
import { HttpHeaders } from '@angular/common/http';

@Component({
  selector: 'gdp-edicion',
  templateUrl: './edicion.component.html',
  styleUrls: ['./edicion.component.scss']
})
export class EdicionComponent implements OnInit {
  listaCat: any;
  public categ: string = '';
  nombre: string = '';
  catego = '';
  ing: string = '';
  pre: number = 1;
  sto: number = 1;
  producto: any;
  // form: ngForm;
  toke: any;
  
  constructor(private categorias:CategoriasService, private productos:ProductoService) { }

  ngOnInit(): void {
    this.categorias.getCategorias().subscribe((cate) => {
    console.log('categoria', cate)
    this.listaCat = cate;
    })
    this.toke = JSON.parse(sessionStorage.getItem('token') || '{}');
  }
  select(value:string) {
    // console.log(value);
    this.categ = value;
    
  }
  onProductsCreate(prod: Producto) {
    let head = new Headers({
      Autorization: `Bearer ${this.toke}`,
    });

    this.productos.addProduct(prod,head).subscribe((p) => {
      console.log('prodd', prod);
      this.producto = p;
    });
    
    console.log('proddu', this.producto);

    
  }
}
