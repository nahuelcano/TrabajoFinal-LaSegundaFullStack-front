import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DashboardRoutingModule } from './dashboard-routing.module';
import { DashboardComponent } from './dashboard.component';

import { ComponentsModule, MaterialModule } from '@gdp/shared/modules';

import { CarritoComponent,CartaComponent,ContactoComponent } from '@gdp/dashboard/components';
// import { CarritoComponent } from '@gdp/dashboard/components/carrito/';
//

const components = [  CarritoComponent,CartaComponent,ContactoComponent];

@NgModule({
  declarations: [DashboardComponent, ...components],
  imports: [
    CommonModule,
    DashboardRoutingModule,
    ComponentsModule,
    MaterialModule
  ],
})
export class DashboardModule {}
