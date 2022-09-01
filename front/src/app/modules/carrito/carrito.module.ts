import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CarritoComponent } from './components/carrito/carrito.component';
import { CarritoRoutingModule } from './components/carrito/carrito-routing.module';



@NgModule({
  declarations: [
    CarritoComponent
  ],
  imports: [
    CommonModule,
    CarritoRoutingModule
  ]
})
export class CarritoModule { }
