import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DashboardRoutingModule } from './dashboard-routing.module';
import { DashboardComponent } from './dashboard.component';

import { ComponentsModule, MaterialModule } from '@gdp/shared/modules';
import { MatTabsModule } from '@angular/material/tabs';
import {   CarritoComponent, CartaComponent, ContactoComponent, EdicionComponent } from '@gdp/dashboard/components';



const components = [  CarritoComponent,CartaComponent,ContactoComponent,EdicionComponent];

@NgModule({
  declarations: [DashboardComponent, ...components],
  imports: [
    CommonModule,
    DashboardRoutingModule,
    ComponentsModule,
    MaterialModule,
    
  ],
})
export class DashboardModule {}
