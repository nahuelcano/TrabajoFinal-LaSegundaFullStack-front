import { Component, OnInit,Input } from '@angular/core';
import { ProductoService } from 'src/app/shared/services/productos/productos.service';

@Component({
  selector: 'gdp-card',
  template: ``,
  styles: [],
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss']
})
export class CardComponent implements OnInit {
  @Input() prod: any;
  
  constructor(private producto: ProductoService) {
    
   }

  ngOnInit(): void {
    // '{{item.id}}'
  //   this.producto.getProducto('').subscribe((product) => {
  //     console.warn('result', product);
  //     this.prod = product;
  // })
    
  }

}
