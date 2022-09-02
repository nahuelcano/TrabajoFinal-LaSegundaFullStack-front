import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ComponentsModule, MaterialModule } from '@gdp/shared/modules';
import { CartaComponent } from './components/carta/carta.component';
import { CartaRoutingModule } from './components/carta/carta-routing.module';
import { NavbarComponent } from '../dashboard/components';
@NgModule({
  declarations: [
    CartaComponent
  ],
  imports: [
    CommonModule,
    ComponentsModule,
    MaterialModule,
    CartaRoutingModule,
  ]
})
export class CartaModule {}
