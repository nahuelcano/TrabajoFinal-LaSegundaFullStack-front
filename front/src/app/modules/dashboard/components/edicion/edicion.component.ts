import { Component, OnInit } from '@angular/core';
import { Producto } from 'src/app/modelos/Producto';
import { CategoriasService } from 'src/app/shared/services/categorias/categorias.service';
import { FormsModule,ReactiveFormsModule } from '@angular/forms';
import { ProductoService } from 'src/app/shared/services/productos/productos.service';

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
  constructor(private categorias:CategoriasService, private productos:ProductoService) { }

  ngOnInit(): void {
    this.categorias.getCategorias().subscribe((cate) => {
    console.log('categoria', cate)
    this.listaCat = cate;
    })
    
  }
  select(value:string) {
    // console.log(value);
    this.categ = value;
    
  }
  onProductsCreate(prod: Producto) {
    this.productos.addProduct(prod).subscribe((p) => {
      console.log('prodd', prod);
      this.producto = p;
    });
    
    console.log('proddu', this.producto);

    
  }
}
