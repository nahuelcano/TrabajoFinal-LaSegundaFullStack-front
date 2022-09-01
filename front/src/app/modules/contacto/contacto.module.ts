import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ContactoComponent } from './components/contacto/contacto.component';
import { ContactoRoutingModule } from './components/contacto/contacto-routing.module';



@NgModule({
  declarations: [
    ContactoComponent
  ],
  imports: [
    CommonModule,
    ContactoRoutingModule
  ]
})
export class ContactoModule { }
